export const ADD_LEAD = 'leads/add_lead';
export const UPDATE_LEAD = 'leads/update/lead';

export interface Lead {
	name?: string;
	phone?: string;
	email?: string;
	status: number;
	oportunities: {
		[key: string]: boolean
	};
}

export interface IN_ADD_LEAD {
	type: typeof ADD_LEAD;
	payload: Lead;
}

export interface IN_UPDATE_LEAD {
	type:typeof UPDATE_LEAD;
	payload: {
		id: string;
		status: number;
	}
}

export const add_lead = (payload: Lead): IN_ADD_LEAD => ({
	type: ADD_LEAD,
	payload,
});

export const update_lead = (id: string, status: number): IN_UPDATE_LEAD => ({
	type: UPDATE_LEAD,
	payload: { id, status },
});

export type LeadAction = IN_ADD_LEAD | IN_UPDATE_LEAD;
