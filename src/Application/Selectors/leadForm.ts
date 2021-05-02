import { StoreState } from '../store';

export const selectCheckbox = (state: StoreState) => state.LeadForm.oportunities;
export const selectForm = (state: StoreState) => {
	const { checked, ...result } = state.LeadForm;
	return result;
};
