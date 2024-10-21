/**
 * Get data from localStorage and retrieve parsed data.
 * @param key string
 */
export const getData = (key: string): any => {
	if (!localStorage) {
		return;
	}
	const item = localStorage.getItem(key) || '';
	if (item) {
		try {
			return JSON.parse(item);
		} catch (err) {
			console.error(`Error getting item ${key} from localStorage:`, err);
			return undefined;
		}
	}
};

/**
 * Store data on localStorage
 * @param key string
 * @param item any
 */
export const storeData = (key: string, item: any): void => {
	if (!localStorage) {
		return;
	}

	try {
		return localStorage.setItem(key, JSON.stringify(item));
	} catch (err) {
		console.error(`Error storing item ${key} to localStorage:`, err);
	}
};

/**
 * Delete from localStorage the data associated with the given key
 * @param key string
 */
export const deleteData = (key: string): void => {
	if (!localStorage) {
		return;
	}

	try {
		return localStorage.removeItem(key);
	} catch (err) {
		console.error(`Error storing item ${key} to localStorage:`, err);
	}
};

/**
 * Clear the localStorage
 */
export const clearData = (): void => {
	if (!localStorage) {
		return;
	}
	try {
		localStorage.clear();
	} catch (err) {
		console.error('Error clearing the localStorage:', err);
	}
};
