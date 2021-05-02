import React, { FC } from 'react';

import './style.css';

interface Props {
	name: string
	label: string;
	isChecked?: boolean;
	onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<Props> = props => (
	<div className='checkbox'>
		<label className='checkbox-label'>
			<input
				className='checkbox-input'
				name={props.name}
				type='checkbox'
				onChange={props.onCheck}
				checked={props.isChecked}
			/>
			{props.label}
		</label>
	</div>
);

export default Checkbox;
