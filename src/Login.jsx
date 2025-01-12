import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { LangContext } from './LangProvider';
import './Login.css';

export default function Login() {
  const { iniciarSesion } = useContext(AuthContext);
  const { lenguaje } = useContext(LangContext);
  const navigate = useNavigate();
  
  const [usuario, setUsuario] = useState('');
  
  const manejarCambio = (event) => {
    setUsuario(event.target.value);
  };
  
  const manejarLogin = () => {
    if (usuario.trim()) {
      iniciarSesion(usuario);
      navigate('/');
    } else {
      alert(translations[lenguaje]?.alert || 'Please enter a username');
    }
  };
  
  const translations = {
    en: {
      title: 'Login',
      placeholder: 'Username',
      label: 'Enter your username and click the button to log in.',
      buttonText: 'Login',
      alert: 'Please enter a username',
    },
    es: {
      title: 'Iniciar sesión',
      placeholder: 'Nombre de usuario',
      label: 'Introduce tu nombre de usuario y haz clic en el botón para iniciar sesión.',
      buttonText: 'Iniciar sesión',
      alert: 'Por favor ingresa un nombre de usuario',
    },
    fr: {
      title: 'Connexion',
      placeholder: 'Nom d\'utilisateur',
      label: 'Entrez votre nom d\'utilisateur et cliquez sur le bouton pour vous connecter.',
      buttonText: 'Se connecter',
      alert: 'Veuillez entrer un nom d\'utilisateur',
    },
    pt: {
      title: 'Entrar',
      placeholder: 'Nome de usuário',
      label: 'Digite seu nome de usuário e clique no botão para fazer login.',
      buttonText: 'Entrar',
      alert: 'Por favor, insira um nome de usuário',
    },
    it: {
      title: 'Accedi',
      placeholder: 'Nome utente',
      label: 'Inserisci il tuo nome utente e fai clic sul pulsante per accedere.',
      buttonText: 'Accedi',
      alert: 'Per favore, inserisci un nome utente',
    },
    ch: {
      title: '登录',
      placeholder: '用户名',
      label: '输入您的用户名并点击按钮登录。',
      buttonText: '登录',
      alert: '请输入用户名',
    },
  };
  
  return (
    <div className="container-all-login">
      <div className="container-login">
        <h1 className="h1-login">{translations[lenguaje]?.title}</h1>
        <input
          type="text"
          placeholder={translations[lenguaje]?.placeholder}
          value={usuario}
          onChange={manejarCambio}
          className="input-login"
        />
        <p className="label-login">{translations[lenguaje]?.label}</p>
        <button className="button-login" onClick={manejarLogin}>
          {translations[lenguaje]?.buttonText}
        </button>
      </div>
    </div>
  );
}