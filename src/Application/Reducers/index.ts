import { combineReducers } from 'redux';

import UserForm from './signInForm';
import LeadTable from './leads';

const reducers = combineReducers({ UserForm, LeadTable });

export default reducers;
