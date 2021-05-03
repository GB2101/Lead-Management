import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { store } from 'react-notifications-component';

import { selectFormRequirements } from '../../../Application/Selectors/signInForm';

import './style.css';
import Header from '../../Components/Header';
import UserForm from '../../Components/Form';

const SignIn: FC = () => {
	const history = useHistory();
	const requirements = useSelector(selectFormRequirements);

	const handleSubmit = () => {
		// eslint-disable-next-line
		const password: {[key: string]: boolean} = requirements.password;
		const { completed, confirmed } = requirements;

		let checked = true;
		for (const key in password) {
			checked = checked && password[key];
		}

		if (checked && completed && confirmed) {
			history.push('/panel');
			store.addNotification({
				title: 'Prazer em ter você aqui!',
				message: 'Você foi cadastrado com sucesso.',
				type: 'success',
				insert: 'top',
				container: 'bottom-right',
				dismiss: {
					duration: 5000,
					onScreen: true,
				},
			});
		} else {
			store.addNotification({
				title: 'Ainda falta algo, verifique o que foi!',
				message: 'Ainda falta algo pra terminar seu cadastro.',
				type: 'warning',
				insert: 'top',
				container: 'bottom-right',
				dismiss: {
					duration: 5000,
					onScreen: true,
				},
			});
		}
	};

	return (
		<div className='signin-page'>
			<Header />

			<div className='signin-body'>
				<UserForm register buttonLabel='Registrar' onSubmit={handleSubmit} />
			</div>
		</div>
	);
};

export default SignIn;
