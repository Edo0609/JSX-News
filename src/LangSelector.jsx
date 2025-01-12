import React, {useContext, useState} from 'react';
import './LangSelector.css';
import {LangContext} from './LangProvider'

const LangSelector = () => {
	const {lenguaje, cambiarLenguaje} = useContext(LangContext);
	const [isOpen, setIsOpen] = useState(false);

	const lenguajes = [
		{code: 'en', label: 'English'},
		{code: 'es', label: 'Español'},
		{code: 'ch', label: '中文'},
		{code: 'fr', label: 'Français'},
		{code: 'pt', label: 'português'},
		{code: 'it', label: 'Italiano'},
	];

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const languageChange = (code) => {
		cambiarLenguaje(code);
		setIsOpen(false);
	};

	return (
		<div className="language-selector">
			<button className="language-button" onClick={toggleDropdown}>
				{lenguajes.find(lang => lang.code === lenguaje)?.label}
			</button>
			{isOpen && (
				<ul className="dropdown-menu">
					{lenguajes.map((lang) => (
						<li key={lang.code} className="dropdown-item" onClick={() => languageChange(lang.code)}>
							{lang.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default LangSelector