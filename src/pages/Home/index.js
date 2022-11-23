import React from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate();
	return (
		<div className='content-wrapper'>
			<div className="create-wrapper">
				<Button title="Create Blog" onClick={() => navigate('/create-blog')} />
			</div>
			<div className='blogs-wrapper'>
				<BlogItem />
				<BlogItem />
				<BlogItem />
				<BlogItem />
			</div>
			<Gap height={24} />
			<div className='pagination'>
				<Button title="Previous" />
				<Gap width={24} />
				<Button title="Next" />
			</div>
		</div>
	)
}

export default Home