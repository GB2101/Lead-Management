import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Input from '../Input';
import './style.css';

interface Props {
	register?: boolean;
	submit: string;
	buttonLabel: string;
}

const UserForm: FC<Props> = props => (
	<div className='form'>
		<Input label='Usuário*' type='text' />
		<Input label='Password*' type='password' />

		{props.register
			? <>
				<Input label='Confirmação Password*' type='password' />
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

export default UserForm;
