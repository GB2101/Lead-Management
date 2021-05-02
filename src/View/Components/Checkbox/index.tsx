import React, { FC } from 'react';

import './style.css';

interface Props {
	label: string;
}

const Checkbox: FC<Props> = props => (
	<div className='checkbox'>
		<label className='checkbox-label'>
			<input className='checkbox-input' name={props.label} type='checkbox' />
			{props.label}
		</label>
	</div>
);

export default Checkbox;
