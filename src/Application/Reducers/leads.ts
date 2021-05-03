import { nanoid } from 'nanoid';

import { Lead, LeadAction, ADD_LEAD, UPDATE_LEAD } from '../Actions/leadsActions';

interface LeadTable {
	[key: string]: Lead;
}

const InitialState: LeadTable = {
	org: {
		name: 'Org. Internacionais',
		phone: '(00)90000-0000',
		email: 'org_international@email.com',
		status: 0,
		oportunities: {
			rpa: true,
			digital: false,
			analytics: false,
			bpm: true,
		},
	},
	farm: {
		name: 'Ind. Farm. LTDA',
		phone: '(00)90000-0000',
		email: 'org_international@email.com',
		status: 1,
		oportunities: {
			rpa: true,
			digital: false,
			analytics: false,
			bpm: true,
		},
	},
	musc: {
		name: 'Musc. Sound Live Cmp',
		phone: '(00)90000-0000',
		email: 'org_international@email.com',
		status: 0,
		oportunities: {
			rpa: true,
			digital: false,
			analytics: false,
			bpm: true,
		},
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
