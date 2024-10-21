/**
 * Get data from sessionStorage and retrieve parsed data.
 * @param key string
 */
export const getData = (key: string): any => {
	if (!sessionStorage) { return; }
	const item = sessionStorage.getItem(key) || '';
	if (item) {
		try {
			return JSON.parse(item);
		} catch (err) {
			console.error(`Error getting item ${key} from sessionStorage:`, err);
			return undefined;
		}
	}
};

/**
 * Store data on sessionStorage
 * @param key string
 * @param item any
 */
export const storeData = (key: string, item: any): void => {
	if (!sessionStorage) { return; }

	try {
		return sessionStorage.setItem(key, JSON.stringify(item));
	} catch (err) {
		console.error(`Error storing item ${key} to sessionStorage:`, err);
	}
};

/**
 * Delete from sessionStorage the data associated with the given key
 * @param key string
 */
export const deleteData = (key: string): void => {
	if (!sessionStorage) { return; }

	try {
		return sessionStorage.removeItem(key);
	} catch (err) {
		console.error(`Error storing item ${key} to sessionStorage:`, err);
	}
};

/**
 * Clear the sessionStorage
 */
export const clearData = (): void => {
	if (!sessionStorage) { return; }
	try {
		sessionStorage.clear();
	} catch (err) {
		console.error('Error clearing the sessionStorage:', err);
	}
};
