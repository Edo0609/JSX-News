import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LangSelector from './LangSelector';
import { LangContext} from './LangProvider';
import './navbar.css';

export default function Navbar() {
	const {lenguaje} = useContext(LangContext)

	const translations = {
		en: {
		  home: "Home",
		  worldNews: "World News",
		  sport: "Sport",
		  finance: "Finance",
		  technology: "Technology",
		  entertainment: "Entertainment",
		},
		es: {
		  home: "Inicio",
		  worldNews: "Noticias del Mundo",
		  sport: "Deportes",
		  finance: "Finanzas",
		  technology: "Tecnología",
		  entertainment: "Entretenimiento",
		},
		fr: {
		  home: "Accueil",
		  worldNews: "Actualités Mondiales",
		  sport: "Sport",
		  finance: "Finance",
		  technology: "Technologie",
		  entertainment: "Divertissement",
		},
		it: {
		  home: "Home",
		  worldNews: "Notizie dal Mondo",
		  sport: "Sport",
		  finance: "Finanza",
		  technology: "Tecnologia",
		  entertainment: "Intrattenimento",
		},
		ch: {
		  home: "首页",
		  worldNews: "国际新闻",
		  sport: "体育",
		  finance: "金融",
		  technology: "科技",
		  entertainment: "娱乐",
		},
		pt: {
		  home: "Início",
		  worldNews: "Notícias do Mundo",
		  sport: "Esporte",
		  finance: "Finanças",
		  technology: "Tecnologia",
		  entertainment: "Entretenimento",
		},
	  };


  return (
    <nav>
      <NavLink 
        to="/" 
        style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
      >
        {translations[lenguaje]?.home}
      </NavLink>
      <NavLink 
        to="/world-news" 
        className={({ isActive }) => isActive ? 'link-activo' : ''}
      >
        {translations[lenguaje]?.worldNews}
      </NavLink>
      <NavLink 
        to="/sports" 
        className={({ isActive }) => isActive ? 'link-activo' : ''}
      >
        {translations[lenguaje]?.sport}
      </NavLink>
      <NavLink 
        to="/finance" 
        className={({ isActive }) => isActive ? 'link-activo' : ''}
      >
        {translations[lenguaje]?.finance}
      </NavLink>
	  <NavLink 
        to="/technology" 
        className={({ isActive }) => isActive ? 'link-activo' : ''}
      >
        {translations[lenguaje]?.technology}
      </NavLink>
	  <NavLink 
        to="/entertainment" 
        className={({ isActive }) => isActive ? 'link-activo' : ''}
      >
        {translations[lenguaje]?.entertainment}
      </NavLink>
	  <div className="lang-selector-container">
		<LangSelector/>
	</div>
    </nav>
  );
}