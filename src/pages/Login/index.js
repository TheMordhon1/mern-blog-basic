import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'

const Login = () => {
	const navigate = useNavigate()
	return (
		<div className='main-page'>
			<div className='left'>
				<img className='bg-image' src={LoginBg} alt="register-bg" />
			</div>
			<div className='right'>
				<p className='title'>Login</p>
				<Gap height={20} />
				<Input label="Email" placeholder="Email" />
				<Gap height={18} />
				<Input label="Password" placeholder="Password" />
				<Gap height={20} />
				<Button title="Login" onClick={() => navigate('/')} />
				<Gap height={50} />
				<Link onClick={() => navigate('/register')} title="Belum Punya akun ? Silahkan Daftar" />
			</div>
		</div>
	)
}

export default Login