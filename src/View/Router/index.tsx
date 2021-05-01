import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from '../Pages/LandingPage';
import SignInPage from '../Pages/SignIn';
import LogInPage from '../Pages/LogIn';

const Router: FC = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/' exact component={LandingPage} />
			<Route path='/signin' component={SignInPage} />
			<Route path='/login' component={LogInPage} />
		</Switch>
	</BrowserRouter>
);

export default Router;
