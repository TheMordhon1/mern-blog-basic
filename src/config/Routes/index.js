import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CreateBlog, DetailBlog, Home, Login, MainApp, Register } from '../../pages';

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <MainApp />,
// 		// children: [
// 		// 	{
// 		// 		path: '/',
// 		// 		element: <Home />
// 		// 	},
// 		// 	{
// 		// 		path: '/create-blog',
// 		// 		element: <CreateBlog />
// 		// 	},
// 		// 	{
// 		// 		path: '/detail-blog',
// 		// 		element: <DetailBlog />
// 		// 	},
// 		// ],
// 	},
// 	{
// 		path: "/login",
// 		element: <Login />,
// 	},
// 	{
// 		path: "/register",
// 		element: <Register />,
// 	},
// 	{
// 		path: "/detail-blog",
// 		element: <DetailBlog />,
// 	},
// 	{
// 		path: "/create-blog",
// 		element: <CreateBlog />,
// 	},
// ]);

const Routing = () => {

	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainApp />}>
					<Route path='/' element={<Home />} />
					<Route path='/create-blog' element={<CreateBlog />} />
					<Route path='/detail-blog' element={<DetailBlog />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</Router>
	)
}

export default Routing