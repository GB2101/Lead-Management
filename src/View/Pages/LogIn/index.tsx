import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import Header from '../../Components/Header';
import UserForm from '../../Components/Form';

const LogIn: FC = () => (
	<div className='login-page'>
		<Header />

		<div className='login-body'>
			<UserForm submit='/panel' buttonLabel='Entrar' />
		</div>
	</div>
);

export default LogIn;
