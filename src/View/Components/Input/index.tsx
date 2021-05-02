import React, { FC } from 'react';

import './style.css';

interface Props {
	label: string;
	type: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = props => (
	<>
		<label className='input-label'>{props.label}</label>
		<input className='input-text' type={props.type} onChange={props.onChange} />
	</>
);

export default Input;
