import React, { FC } from 'react';

import LeadCell from '../LeadCell';

interface DataType {
	id: number;
	status: number;
	title: string;
}

interface Props {
	first?: boolean;
	last?: boolean;
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
			content.push(<LeadCell key={index} {...props} index={index} />);
		} else {
			content.push(<LeadCell key={index} {...props} index={index}>{item.title}</LeadCell>);
		}
	}

	return (
		<div>
			{content}
		</div>
	);
};
export default LeadColumn;
