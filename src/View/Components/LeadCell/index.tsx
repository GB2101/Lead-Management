import React, { FC } from 'react';

import './style.css';

interface Props {
	header?: boolean
	empty?: boolean;
	first?: boolean;
	last?: boolean;
	index?: number;
}

const LeadCell: FC<Props> = props => {
	let className = 'leadcell';
	props.header ? className += ' header' : '';
	props.first ? className += ' first' : '';
	props.last ? className += ' last' : '';

	if (props.index !== undefined) {
		console.log(props.index, 'exist');
		props.index % 2 !== 0 ? className += ' even' : className += ' odd';
	}

	return (
		<div className={className}>
			<h1>{props.children}</h1>
		</div>
	);
};

export default LeadCell;
