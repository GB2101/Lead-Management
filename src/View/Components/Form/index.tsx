import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

interface Props {
	register?: boolean;
	submit: string;
	buttonLabel: string;
}

const UserForm: FC<Props> = props => (
	<div className='form'>
		<label className='label'>Usuário*</label>
		<input className='input' type='text' />

		<label className='label'>Password*</label>
		<input className='input' type='password' />

		{props.register
			? <>
				<label className='label'>Confirmação Password*</label>
				<input className='input' type='password' />
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
