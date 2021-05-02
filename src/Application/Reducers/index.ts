import { combineReducers } from 'redux';

import UserForm from './signInForm';
import LeadTable from './leads';
import LeadForm from './leadForm';

const reducers = combineReducers({ UserForm, LeadTable, LeadForm });

export default reducers;
