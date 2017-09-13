import Immutable from 'immutable';

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return {};
		}
		const pureObject = JSON.parse(serializedState);
		const immutableData = {};
		Object.keys(pureObject).forEach((name) => {
			immutableData[name] = Immutable.fromJS(pureObject[name]);
		});

		return immutableData;
	} catch (err) {
		return {};
	}
};

export const saveAuthorizationData = ({ accessToken, refreshToken }) => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return {};
		}
		const pureObject = JSON.parse(serializedState);
		pureObject.authorization = pureObject.authorization || {};
		pureObject.authorization.access_token = accessToken;
		pureObject.authorization.refresh_token = refreshToken;
		localStorage.setItem('state', JSON.stringify(pureObject));
	} catch (err) {
		console.error(err); // TODO Remove
	}
};
