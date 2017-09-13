import Immutable from 'immutable';

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return {};
		}
		const pureObject = JSON.parse(serializedState);
		const immutableData = {};

		for (const name in pureObject) {
			if (pureObject.hasOwnProperty(name)) {
				immutableData[name] = Immutable.fromJS(pureObject[name]);
			}
		}

		return immutableData;
	} catch (err) {
		return {};
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch (err) {
		console.error(err); // TODO Remove
	}
};
