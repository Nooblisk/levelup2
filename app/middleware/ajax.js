const serialize = data =>
	Object.entries(data).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');

function sendRequest({ method = 'get', url, headers, data }) {
	return new Promise((resolve, reject) => {
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState === 4) {
				if (xhttp.status === 200) {
					resolve(xhttp.responseText);
				} else {
					reject({ errorCode: xhttp.status, errorMessage: xhttp.statusText });
				}
			}
		};
		xhttp.open(method, url, true);
		Object.entries(headers).forEach(([key, value]) => {
			console.log('key = ', key); // TODO Remove
			console.log('value = ', value); // TODO Remove
			xhttp.setRequestHeader(key, value);
		});
		if (data) {
			console.log('data = ', data); // TODO Remove
			// xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
			xhttp.send(serialize(data));
		} else {
			xhttp.send();
		}

	});
}

export default ({ dispatch, getState }) => next => (action) => {
	if (!action.ajaxAction) {
		next(action);
		return null;
	}
	const copiedAction = { ...action };
	console.log('action = ', action); // TODO Remove
	sendRequest({ method: action.method, url: action.url, headers: action.headers, data: action.data })
		.then(
			(data) => {
				console.log('data = ', data); // TODO Remove
				copiedAction.payload = JSON.parse(data);
				copiedAction.type = action.name;
				next(copiedAction);
			},
			(error) => {
				if (copiedAction.afterError) {
					copiedAction.afterError(error);
				} else {
					console.error(error);
				}
			});
};
