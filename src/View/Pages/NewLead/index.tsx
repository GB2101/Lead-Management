import React, { FC } from 'react';

import Header from '../../Components/Header';
import Input from '../../Components/Input';
import Checkbox from '../../Components/Checkbox';
import './style.css';

const NewLead: FC = () => (
	<div className='newlead'>
		<Header />

		<div className='newlead-body'>
			<h1 className='newlead-top'>Novo Lead</h1>

			<div className='newlead-form'>
				<div className='newlead-fields'>
					<Input label='Nome*' type='text' />
					<Input label='Telefone*' type='text' />
					<Input label='Email*' type='text' />
				</div>
				<div className='newlead-selectors'>
					<div>
						<h1 className='newlead-label'>Opotunidades*</h1>

						<Checkbox label='Marcar Todas' />
						<Checkbox label='RPA' />
						<Checkbox label='Produto Digital' />
						<Checkbox label='Analytics' />
						<Checkbox label='BPM' />
					</div>

					<button className='newlead-button'>Salvar</button>
				</div>
			</div>
		</div>
	</div>
);

export default NewLead;
