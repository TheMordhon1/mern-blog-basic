import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components';

const MainApp = () => {

	return (
		<div>
			<Header />
			<Outlet />
			<div>Footer</div>
		</div>
	)
}

export default MainApp