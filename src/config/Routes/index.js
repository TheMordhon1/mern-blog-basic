import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Login, Register } from '../../pages';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		// children: [
		//   {
		//     path: "team",
		//     element: <Team />,
		//     loader: teamLoader,
		//   },
		// ],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
]);

const Routes = () => {

	return (
		<RouterProvider router={router} />
	)
}

export default Routes