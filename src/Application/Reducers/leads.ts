import { nanoid } from 'nanoid';

import { Lead, LeadAction, ADD_LEAD, UPDATE_LEAD } from '../Actions/leadsActions';

interface LeadTable {
	[key: string]: Lead;
}

const InitialState: LeadTable = {
	aaa: {
		name: 'Org. Internacionais',
		phone: '(00)90000-0000',
		email: 'org_international@email.com',
		status: 0,
		oporunities: [ 'RPA', 'BPM' ],
	},
};

const reducer = (state: LeadTable = InitialState, action: LeadAction): LeadTable => {
	switch (action.type) {
		case ADD_LEAD: {
			const id = nanoid();
			const lead = action.payload;

			return {
				...state,
				[id]: lead,
			};
		}

		case UPDATE_LEAD: {
			const { id, status } = action.payload;
			const old_status = state[id].status;

			if (status - old_status !== 1) {
				return state;
			}

			return {
				...state,
				[id]: {
					...state[id],
					status,
				},
			};
		}

		default: {
			return state;
		}
	}
};

export default reducer;
