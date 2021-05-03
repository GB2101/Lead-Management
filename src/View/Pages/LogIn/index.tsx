import React, { FC } from 'react';
import { store } from 'react-notifications-component';
import { useHistory } from 'react-router-dom';

import './style.css';
import Header from '../../Components/Header';
import UserForm from '../../Components/Form';

const LogIn: FC = () => {
	const history = useHistory();

	const handleSubmit = () => {
		store.addNotification({
			title: 'Prazer em ver você novamente!',
			message: 'Você foi logado com sucesso.',
			type: 'success',
			insert: 'top',
			container: 'bottom-right',
			dismiss: {
				duration: 5000,
				onScreen: true,
			},
		});
		history.push('/panel');
	};
	return (
		<div className='login-page'>
			<Header />

			<div className='login-body'>
				<UserForm buttonLabel='Entrar' onSubmit={handleSubmit} />
			</div>
		</div>
	);
};

export default LogIn;
