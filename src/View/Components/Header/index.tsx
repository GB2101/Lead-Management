import React, { FC } from 'react';

import './style.css';
import Logo from '../Logo';

const Header: FC = props => (
	<header className='top-header'>
		<Logo />
		{props.children}
	</header>
);

export default Header;
