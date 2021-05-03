import React, { FC } from 'react';
import ScrollArea from 'react-scrollbar';
import { useSelector } from 'react-redux';

import { selectLeads } from '../../../Application/Selectors/leads';

import LeadCell from '../LeadCell';
import LeadColumn, { DataType } from '../LeadColumn';
import './style.css';

const LeadTable: FC = () => {
	const data: { [key: number]: DataType }[] = [{}, {}, {}];
	const leads = useSelector(selectLeads);

	for (const index in leads) {
		const item = leads[index];
		const { status: st } = item;
		data[st][index] = item;
	}

	return (
		<div className='leadtable'>
			<div className='title-section'>
				<LeadCell header column={0}>Cliente em Potencial</LeadCell>
				<LeadCell header column={1}>Dados Confirmados</LeadCell>
				<LeadCell header column={2}>Reunião Agendada</LeadCell>
			</div>

			<ScrollArea horizontal={false} speed={0.8} className='scroll-area'>
				<div className='scroll-section'>
					<LeadColumn amount={leads.length} column={0} data={data[0]} />
					<LeadColumn amount={leads.length} column={1} data={data[1]} />
					<LeadColumn amount={leads.length} column={2} data={data[2]} />
				</div>
			</ScrollArea>
		</div>
	);
};

export default LeadTable;
