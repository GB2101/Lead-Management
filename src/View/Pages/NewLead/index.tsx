import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { store } from 'react-notifications-component';

import { set_name, set_email, set_phone, set_oportunities, reset } from '../../../Application/Actions/leadFormAction';
import { add_lead } from '../../../Application/Actions/leadsActions';
import { selectCheckbox, selectForm } from '../../../Application/Selectors/leadForm';

import Header from '../../Components/Header';
import Input from '../../Components/Input';
import Checkbox from '../../Components/Checkbox';
import './style.css';

const NewLead: FC = () => {
	const history = useHistory();

	const dispatch = useDispatch();
	const form = useSelector(selectForm);
	const checkboxs = useSelector(selectCheckbox);
	const [ checkAll, setCheckAll ] = useState(false);

	const handleInput = (field: string) => {
		let setter: typeof set_name | typeof set_phone | typeof set_email | (() => void);

		switch (field) {
			case 'name':
				setter = set_name;
				break;
			case 'phone':
				setter = set_phone;
				break;
			case 'email':
				setter = set_email;
				break;
			default: {
				setter = () => null;
			}
		}
		return (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setter(event.target.value));
	};

	const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name } = event.target;
		const value = !checkboxs[name];
		dispatch(set_oportunities(name, value));
	};

	const handleCheckAll = () => {
		dispatch(set_oportunities('rpa', !checkAll));
		dispatch(set_oportunities('digital', !checkAll));
		dispatch(set_oportunities('analytics', !checkAll));
		dispatch(set_oportunities('bpm', !checkAll));

		setCheckAll(state => !state);
	};

	const handleSubmit = () => {
		const { completed, ...data } = form;
		if (completed) {
			store.addNotification({
				title: 'Lead adicionado com Sucesso',
				message: 'O novo Lead foi cadastrado com sucesso.',
				type: 'success',
				insert: 'top',
				container: 'bottom-right',
				dismiss: {
					duration: 5000,
					onScreen: true,
				},
			});
			history.push('/panel');
			dispatch(add_lead({ ...data, status: 0 }));
			dispatch(reset());
		} else {
			store.addNotification({
				title: 'Preencha todos os campos',
				message: 'Todos os campos s??o obrigat??rios, por favor, preencha-os.',
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
		<div className='newlead'>
			<Header />

			<div className='newlead-body'>
				<h1 className='newlead-top'>Novo Lead</h1>

				<div className='newlead-form'>
					<div className='newlead-fields'>
						<Input label='Nome*' type='text' onChange={handleInput('name')} />
						<Input label='Telefone*' type='text' onChange={handleInput('phone')} />
						<Input label='Email*' type='text' onChange={handleInput('email')} />
					</div>
					<div className='newlead-selectors'>
						<div>
							<h1 className='newlead-label'>Opotunidades*</h1>

							<Checkbox name='all' label='Marcar Todas' onCheck={handleCheckAll} />
							<Checkbox isChecked={checkboxs.rpa} name='rpa' label='RPA' onCheck={handleCheck} />
							<Checkbox isChecked={checkboxs.digital} name='digital' label='Produto Digital' onCheck={handleCheck} />
							<Checkbox isChecked={checkboxs.analytics} name='analytics' label='Analytics' onCheck={handleCheck} />
							<Checkbox isChecked={checkboxs.bpm} name='bpm' label='BPM' onCheck={handleCheck} />
						</div>

						<button className='newlead-button' onClick={handleSubmit}>Salvar</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewLead;
