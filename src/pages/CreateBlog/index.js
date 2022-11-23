import React from 'react'
import './createBlog.scss'
import { Button, Gap, Input, TextArea, Upload } from '../../components'

const CreateBlog = () => {
	return (
		<div>
			<p className='page-title'>Create New Blog</p>
			<Gap height={24} />
			<Input label="Post Title" />
			<Upload />
			<TextArea />
			<Gap height={24} />
			<div className='button-wrapper'>
				<Button title="Save" />
			</div>
		</div>
	)
}

export default CreateBlog