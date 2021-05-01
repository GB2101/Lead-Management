import React, { FC } from 'react';

import './style.css';

interface Props {
	register?: boolean
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

		<button className='submit'>Registrar</button>
	</div>
);

export default UserForm;
