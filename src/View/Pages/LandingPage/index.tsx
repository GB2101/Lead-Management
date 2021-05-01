import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import Header from '../../Components/Header';

const LandingPage: FC = () => (
	<div className='landing-page'>
		<Header>
			<div className='button'>
				<Link to='/login'>
					<button>Entrar</button>
				</Link>
				<Link to='/signin'>
					<button>Registrar</button>
				</Link>
			</div>
		</Header>

		<div className='body'>
			<h1 className='apresentation'>Lead Management</h1>
			<p>
				Projeto feito por Gabriel Braz para solução do desafio técnico do processo seletivo.
			</p>
		</div>
	</div>
);

export default LandingPage;
