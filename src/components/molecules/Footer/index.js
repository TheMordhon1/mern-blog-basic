import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import './footer.scss'

const Footer = () => {
	const dateTime = new Date()
	return (
		<div>
			<div className='footer-wrapper'>
				<div className='logo'>LOGO</div>
				<div className='icons-wrapper'>
					<div className='icon'>
						<FaFacebookF />
					</div>
					<div className='icon'>
						<FaGithub />
					</div>
					<div className='icon'>
						<FaTwitter />
					</div>
					<div className='icon'>
						<FaInstagram />
					</div>
				</div>
			</div>
			<div className='copy'>&copy;Copyright | {dateTime.getFullYear()}</div>
		</div>
	)
}

export default Footer