import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

export default function LogButton() {
  const { estaAutenticado, usuario, iniciarSesion, cerrarSesion } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (estaAutenticado) {
      cerrarSesion();
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <button onClick={handleClick}>
      {estaAutenticado ? `Logout from: ${usuario?.nombre}` : 'Login'}
    </button>
  );
}