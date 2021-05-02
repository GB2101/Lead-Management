import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { set_user_signin, set_password_signin, set_confirmation_signin } from '../../../Application/Actions/signInFormActions';

import Input from '../Input';
import './style.css';

interface Props {
	register?: boolean;
	submit: string;
	buttonLabel: string;
}

const UserForm: FC<Props> = props => {
	const dispatch = useDispatch();

	const handleInput = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
		const setter = field === 'user' ? set_user_signin : field === 'password' ? set_password_signin : set_confirmation_signin;
		dispatch(setter(event.target.value));
	};

	return (
		<div className='form'>
			<Input label='Usuário*' type='text' onChange={handleInput('user')} />
			<Input label='Password*' type='password' onChange={handleInput('password')} />

			{props.register
				? <>
					<Input
						label='Confirmação Password*'
						type='password'
						onChange={handleInput('confirmation')}
					/>
				</>
				: ''
			}

			<button className='submit'>
				<Link to={props.submit} className='submit'>
					{props.buttonLabel}
				</Link>
			</button>
		</div>
	);
};

export default UserForm;
