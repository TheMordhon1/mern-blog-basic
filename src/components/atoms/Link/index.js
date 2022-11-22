import React from 'react'
import './link.scss'

const Link = ({ title, onClick }) => {
	return (
		<div className='link' onClick={onClick}>{title}</div>
	)
}

export default Link