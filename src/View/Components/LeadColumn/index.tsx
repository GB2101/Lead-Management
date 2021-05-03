import React, { FC } from 'react';

import LeadCell from '../LeadCell';

export interface DataType {
	id: string;
	status: number;
	name?: string;
}

interface Props {
	column: number;
	amount: number;
	data: {
		[key: number]: DataType;
	};
}

const LeadColumn: FC<Props> = props => {
	const content: JSX.Element[] = [];

	for (let index = 0; index < props.amount; index++) {
		const item = props.data[index];

		if (item === undefined) {
			content.push(
				<LeadCell
					key={index}
					{...props}
					empty
					id={index.toString()}
					index={index}
					column={props.column}
				/>,
			);
		} else {
			content.push(
				<LeadCell
					key={item.id}
					{...props}
					id={item.id}
					index={index}
					column={props.column}
				>
					{item.name}
				</LeadCell>,
			);
		}
	}

	return (
		<div>
			{content}
		</div>
	);
};
export default LeadColumn;
