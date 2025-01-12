import {useState, createContext} from 'react';

export const LangContext = createContext(null);

export function LangProvider({children}) {
	const [lenguaje, setLenguaje] = useState('en');
	
	const cambiarLenguaje = (newLenguaje) => {
		setLenguaje(newLenguaje);
	};

	return (
		<LangContext.Provider value={{lenguaje, cambiarLenguaje}}>
			{children}
		</LangContext.Provider>
	)
}