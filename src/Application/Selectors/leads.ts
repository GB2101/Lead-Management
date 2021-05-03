import { Lead } from '../Actions/leadsActions';
import { StoreState } from '../store';

interface LeadQuery extends Lead {
	id: string;
}

export const selectLeads = (state: StoreState) => {
	const { LeadTable } = state;
	const result: LeadQuery[] = [];

	for (const id in LeadTable) {
		const lead = LeadTable[id];
		result.push({ ...lead, id });
	}

	return result;
};
