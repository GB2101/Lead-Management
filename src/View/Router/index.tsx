import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from '../Pages/LandingPage';
import SignInPage from '../Pages/SignIn';
import LogInPage from '../Pages/LogIn';
import LeadPanel from '../Pages/LeadPanel';
import NewLead from '../Pages/NewLead';

const Router: FC = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/' exact component={LandingPage} />
			<Route path='/signin' component={SignInPage} />
			<Route path='/login' component={LogInPage} />
			<Route path='/panel' component={LeadPanel} />
			<Route path='/newlead' component={NewLead} />
		</Switch>
	</BrowserRouter>
);

export default Router;
