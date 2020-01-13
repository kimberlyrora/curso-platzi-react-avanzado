import React, { useContext } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { NotFound } from './pages/NotFound'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

export const App = () => {
	const { isAuth } = useContext(Context)
	return (
		<div>
			<GlobalStyle />
			<Logo />
			<Router>
				<NotFound default />
				<Home path='/' />
				<Home path='/pet/:categoryId' /> 
				<Detail path='/detail/:detailId' />	
				{ !isAuth && <NotRegisterUser path='/login' />}	
				{ !isAuth && <Redirect noThrow from='/favs' to='/login' />}
				{ !isAuth && <Redirect noThrow from='/user' to='/login' />}
	            { isAuth && <Redirect noThrow from='/login' to='/' /> }
				<Favs path='/favs' />
				<User path='/user' />	
			</Router>
			<Navbar />
		</div>
    )
}