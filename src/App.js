import React from 'react'
import { Logo } from './components/Logo'
import { GlobalStyle }from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { Navbar } from './components/Navbar/index'
import { Router } from '@reach/router'
import Context from './Context'

export const App = () => {
	return (
		<div>
		<GlobalStyle />
		<Logo />
		<Router>
			<Home  path='/' />
	  	<Home path='/pet/:categoryId' /> 
			<Detail path='/detail/:detailId' />			
		</Router>
		<Context.Consumer>
			{
				({ isAuth }) => 
				isAuth 
				? <Router>
          <Favs path='/favs' />
				  <User path='/user' />
				</Router>
				: <Router>
          <NotRegisterUser path='/favs' />
				  <NotRegisterUser path='/user' />
				</Router>
			}
		</Context.Consumer>
			
		<Navbar></Navbar>
		</div>
)}