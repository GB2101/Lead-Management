import React, { FC } from 'react';
import ScrollArea from 'react-scrollbar';

import LeadCell from '../LeadCell';
import LeadColumn from '../LeadColumn';
import './style.css';

interface DataType {
	id: number;
	status: number;
	title: string;
}

const LEADS = [
	{
		id: 0,
		status: 0,
		title: 'Org. Internacionais',
	},
	{
		id: 1,
		status: 1,
		title: 'Ind. Farm. LTDA',
	},
	{
		id: 2,
		status: 2,
		title: 'Musc. Sound Live Cmp',
	},
	{
		id: 3,
		status: 1,
		title: 'Nova Empresa',
	},
];

const LeadTable: FC = () => {
	const data: { [key: number]: DataType }[] = [{}, {}, {}];

	for (const index in LEADS) {
		const item = LEADS[index];
		const { status: st } = item;
		data[st][index] = item;
	}

	return (
		<div className='leadtable'>
			<div className='title-section'>
				<LeadCell header first>Cliente em Potencial</LeadCell>
				<LeadCell header>Dados Confirmados</LeadCell>
				<LeadCell header last>Reunião Agendada</LeadCell>
			</div>

			<ScrollArea horizontal={false} speed={0.8} className='scroll-area'>
				<div className='scroll-section'>
					<LeadColumn first amount={LEADS.length} data={data[0]} />
					<LeadColumn amount={LEADS.length} data={data[1]} />
					<LeadColumn last amount={LEADS.length} data={data[2]} />
				</div>
			</ScrollArea>
		</div>
	);
};

export default LeadTable;
