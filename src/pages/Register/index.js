import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import './register.scss'

const Register = () => {
	const navigate = useNavigate()
	return (
		<div className='main-page'>
			<div className='left'>
				<img className='bg-image' src={RegisterBg} alt="register-bg" />
			</div>
			<div className='right'>
				<p className='title'>Register</p>
				<Gap height={20} />
				<Input label="Full Name" placeholder="Full Name" />
				<Gap height={18} />
				<Input label="Email" placeholder="Email" />
				<Gap height={18} />
				<Input label="Password" placeholder="Password" />
				<Gap height={20} />
				<Button title="Register" onClick={() => navigate('/')} />
				<Gap height={50} />
				<Link onClick={() => navigate('/login')} title="Kembali ke Login" />
			</div>
		</div>
	)
}

export default Register