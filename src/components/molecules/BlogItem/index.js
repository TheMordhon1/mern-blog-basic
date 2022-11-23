import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterBg } from '../../../assets'
import './blogItem.scss'

const BlogItem = () => {
	const navigate = useNavigate('/detail-blog')
	return (
		<div className='blog-item' onClick={() => navigate('/detail-blog')}>
			<div className='image-thumb-wrapper'>
				<img className='image-thumb' src={RegisterBg} alt="post-thumb" />
			</div>
			<div className='content-detail'>
				<p className='title'>Title Post</p>
				<p className='author'>Author - Date</p>
				<p className='body'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
			</div>
		</div>
	)
}

export default BlogItem