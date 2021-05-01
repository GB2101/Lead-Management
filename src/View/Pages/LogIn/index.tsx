import React, { FC } from 'react';

import './style.css';
import Header from '../../Components/Header';
import UserForm from '../../Components/Form';

const LogIn: FC = () => (
	<div className='login-page'>
		<Header />

		<div className='login-body'>
			<UserForm />
		</div>
	</div>
);

export default LogIn;
