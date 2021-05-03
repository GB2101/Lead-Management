import React, { FC, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop, ConnectDragSource, ConnectDropTarget } from 'react-dnd';

import { update_lead } from '../../../Application/Actions/leadsActions';

import './style.css';

interface Props {
	id?: string;
	header?: boolean
	empty?: boolean;
	index?: number;
	column: number;
}

const LeadCell: FC<Props> = props => {
	const dispatch = useDispatch();

	const dndRef = useRef() as React.MutableRefObject<HTMLInputElement>;

	const active = !(props.empty || props.header);

	let collect = {
		isDragging: false,
	};
	let dragRef: ConnectDragSource;
	let dropRef: ConnectDropTarget;

	if (active) {
		const drag = useDrag({
			type: 'LEAD',
			item: { id: props.id, index: props.index, column: props.column },
			collect: monitor => ({
				isDragging: monitor.isDragging(),
			}),
		});
		[ collect, dragRef ] = drag;
		dragRef(dndRef);
	}

	if (props.empty) {
		const drop = useDrop({
			accept: 'LEAD',
			drop: (item: { id: string, index: number, column: number }) => {
				if (item.column !== props.column) {
					if (item.index === props.index) {
						dispatch(update_lead(item.id, props.column));
					}
				}
			},
		});

		[ , dropRef ] = drop;
		dropRef(dndRef);
	}

	let className = 'leadcell';
	props.header ? className += ' header' : '';

	active ? className += ' active' : '';

	if (props.index !== undefined) {
		props.index % 2 !== 0 ? className += ' even' : className += ' odd';
	}

	if (collect.isDragging) {
		className += ' isDragging';
	}

	return (
		<div ref={dndRef} className={className}>
			<h1>{props.children}</h1>
		</div>
	);
};

export default LeadCell;
