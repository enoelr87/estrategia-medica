import { environment } from 'src/environments/environment';

const API_DATA: string = environment.apiUrl;

export const buildURLData = (serviceUrl: string): string => {
	return `${API_DATA + serviceUrl}`;
};
