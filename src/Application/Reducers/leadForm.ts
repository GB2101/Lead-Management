import { LeadFormAction, SET_NAME, SET_PHONE, SET_EMAIL, SET_OPORTUNITIES, RESET } from '../Actions/leadFormAction';
import { field_validation } from '../functions/field_validation';

interface LeadForm {
	name?: string;
	phone?: string;
	email?: string;
	checked?: string;
	oportunities: {
		[key: string]: boolean
	};

	completed: boolean;
}

const InitialState: LeadForm = {
	completed: false,
	oportunities: {
		rpa: false,
		digital: false,
		analytics: false,
		bpm: false,
	},
};

const reducer = (state: LeadForm = InitialState, action: LeadFormAction): LeadForm => {
	switch (action.type) {
		case SET_NAME: {
			const { name } = action.payload;
			const { phone, email, checked } = state;

			const completed = field_validation(name, phone, email, checked);

			return {
				...state,
				name,
				completed,
			};
		}

		case SET_PHONE: {
			const { phone } = action.payload;
			const { name, email, checked } = state;

			const completed = field_validation(name, phone, email, checked);

			return {
				...state,
				phone,
				completed,
			};
		}

		case SET_EMAIL: {
			const { email } = action.payload;
			const { phone, name, checked } = state;

			const completed = field_validation(name, phone, email, checked);

			return {
				...state,
				email,
				completed,
			};
		}

		case SET_OPORTUNITIES: {
			const { oportunity, value } = action.payload;
			const { name, phone, email } = state;
			const checked = 'checked';

			const completed = field_validation(name, phone, email, checked);

			return {
				...state,
				checked,
				completed,
				oportunities: {
					...state.oportunities,

					[oportunity]: value,
				},
			};
		}

		case RESET: {
			return InitialState;
		}

		default: {
			return state;
		}
	}
};

export default reducer;
