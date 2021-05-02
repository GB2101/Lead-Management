import React, { FC } from 'react';

import Header from '../../Components/Header';
import LeadTable from '../../Components/LeadTable';
import './style.css';

const LeadPanel: FC = () => (
	<div className='leadpanel'>
		<Header />

		<div className='leadpanel-body'>
			<div className='leadpanel-top'>
				<h1>Painel de Leads</h1>
				<button>Novo Lead (+)</button>
			</div>

			<LeadTable />
		</div>
	</div>
);

export default LeadPanel;
