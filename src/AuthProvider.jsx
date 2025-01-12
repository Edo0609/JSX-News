import { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(() => {

    const storedAutenticado = localStorage.getItem('autenticado');
    return storedAutenticado ? JSON.parse(storedAutenticado) : false;
  });
  const [usuario, setUsuario] = useState(() => {

    const storedUsuario = localStorage.getItem('usuario');
    return storedUsuario ? JSON.parse(storedUsuario) : null;
  });


  useEffect(() => {
    localStorage.setItem('autenticado', JSON.stringify(autenticado));
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }, [autenticado, usuario]);

  const iniciarSesion = (nombreUsuario) => {
    setAutenticado(true);
    setUsuario({ nombre: nombreUsuario });
  };

  const cerrarSesion = () => {
    setAutenticado(false);
    setUsuario(null);
  };

  const valor = {
    estaAutenticado: autenticado,
    usuario,
    iniciarSesion,
    cerrarSesion,
  };

  return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>;
}