export const SET_NAME = 'lead_form/set_name';
export const SET_PHONE = 'lead_form/set_phone';
export const SET_EMAIL = 'lead_form/set_email';
export const SET_OPORTUNITIES = 'lead_form/set_oportunities';

export interface IN_SET_NAME{
	type: typeof SET_NAME;
	payload: {
		name: string;
	}
}

export interface IN_SET_PHONE{
	type: typeof SET_PHONE;
	payload: {
		phone: string;
	}
}

export interface IN_SET_EMAIL{
	type: typeof SET_EMAIL;
	payload: {
		email: string;
	}
}

export interface IN_SET_OPORTUNITIES{
	type: typeof SET_OPORTUNITIES;
	payload: {
		oportunities: string[];
	}
}

export const set_name = (name: string): IN_SET_NAME => ({
	type: SET_NAME,
	payload: { name },
});

export const set_phone = (phone: string): IN_SET_PHONE => ({
	type: SET_PHONE,
	payload: { phone },
});

export const set_email = (email: string): IN_SET_EMAIL => ({
	type: SET_EMAIL,
	payload: { email },
});

export const set_oportunities = (oportunities: string[]): IN_SET_OPORTUNITIES => ({
	type: SET_OPORTUNITIES,
	payload: { oportunities },
});

export type LeadFormAction = IN_SET_NAME | IN_SET_PHONE | IN_SET_EMAIL | IN_SET_OPORTUNITIES;
