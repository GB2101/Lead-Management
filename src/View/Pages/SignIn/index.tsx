import React, { FC } from 'react';

import './style.css';
import Header from '../../Components/Header';
import UserForm from '../../Components/Form';

const SignIn: FC = () => (
	<div className='signin-page'>
		<Header />

		<div className='signin-body'>
			<UserForm register />
		</div>
	</div>
);

export default SignIn;
