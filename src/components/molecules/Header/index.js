import React from 'react'
import { useNavigate } from 'react-router-dom'
import './header.scss'

const Header = () => {
	const navigate = useNavigate()
	return (
		<div className='header'>
			<div className='logo' onClick={() => navigate('/')}>MERN-Blog</div>
			<div className='logout' onClick={() => navigate('/login')}>Logout</div>
		</div>
	)
}

export default Header