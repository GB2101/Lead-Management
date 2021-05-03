import React, { FC } from 'react';

import { useDispatch } from 'react-redux';
import { set_user_signin, set_password_signin, set_confirmation_signin } from '../../../Application/Actions/signInFormActions';

import Input from '../Input';
import './style.css';

interface Props {
	register?: boolean;
	buttonLabel: string;
	onSubmit?: () => void;
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

			<button className='submit' onClick={props.onSubmit}>
				{props.buttonLabel}
			</button>
		</div>
	);
};

export default UserForm;
