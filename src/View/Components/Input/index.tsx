import React, { FC } from 'react';

import './style.css';

interface Props {
	label: string;
	type: string;
}

const Input: FC<Props> = props => (
	<>
		<label className='input-label'>{props.label}</label>
		<input className='input-text' type={props.type} />
	</>
);

export default Input;
