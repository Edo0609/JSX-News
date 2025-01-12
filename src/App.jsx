
import './App.css'
import { LangProvider } from './LangProvider'
import { AuthProvider } from './AuthProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Sports from './Sports'
import World from './World'
import Finance from './Finance'
import Technology from './Technology'
import Entertainment from './Entertainment'
import Article from './Article'
import Login from './Login'
import logo from './assets/nyt-logo.png'
import LogButton from './LogButton'
import Search from './Search'

function App() {

  return (
    <AuthProvider>
		<LangProvider>
			<BrowserRouter>
			<header>
				<div>
					<Search/>
					<img src={logo}></img>
					<LogButton/>
				</div>
			</header>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/world-news" element={<World/>}/>
				<Route path="/sports" element={<Sports/>}/>
				<Route path="/finance" element={<Finance/>}/>
				<Route path="/technology" element={<Technology/>}/>
				<Route path="/entertainment" element={<Entertainment/>}/>
				<Route path="/news/:id" element={<Article/>}/>
				<Route path="/login" element={<Login/>}/>
				<Route path="*" element={<div>Página no encontrada</div>} />
			</Routes>
			</BrowserRouter>
		</LangProvider>
	</AuthProvider>
  )
}

export default App
