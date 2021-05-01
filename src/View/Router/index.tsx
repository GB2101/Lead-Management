import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from '../Pages/LandingPage';

const Router: FC = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/' exact component={LandingPage} />
		</Switch>
	</BrowserRouter>
);

export default Router;
