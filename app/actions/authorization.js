import config from 'config';

export const AUTHORIZE = 'AUTHORIZE';
export const REGISTRATION = 'REGISTRATION';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const GET_USER_INFO = 'GET_USER_INFO';

const { BASE_URL, CLIENT_ID, CLIENT_SECRET } = config;
const getAuthorizationHeaders = (getState) => {
	return {
		Authorization: `Bearer ${getState().authorization.get('access_token')}`,
	};
};

export function authorize(username, password) {
	return (dispatch) => {
		dispatch({
			ajaxAction: true,
			name: AUTHORIZE,
			method: 'POST',
			url: `${BASE_URL}/oauth/v2/token`,
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
			},
			data: {
				grant_type: "password",
				client_id: CLIENT_ID,
				client_secret: CLIENT_SECRET,
				username: username,
				password: password,
			},
			payload: {},
			afterError: (data) => {
				const {
					errorCode,
					errorMessage,
				} = data;

				if (errorCode && errorCode === 501) {
					dispatch(refreshToken());
				} else {
					alert(`${errorCode} ${errorMessage}`);
				}
			},
		});
	};
}

export function registration(email, username, firstPassword, secondPassword) {
	return (dispatch) => {
		dispatch({
			ajaxAction: true,
			name: REGISTRATION,
			method: "POST",
			url: `${BASE_URL}/users`,
			data: {
				'fos_user_registration_form[email]': email,
				'fos_user_registration_form[username]': username,
				'fos_user_registration_form[plainPassword][first]': firstPassword,
				'fos_user_registration_form[plainPassword][second]': secondPassword,
			},
			payload: {},
			afterError: (data) => {
				alert(data);
			},
		});
	};
}

export function refreshToken() {
	return (dispatch, getState) => {
		dispatch({
			ajaxAction: true,
			name: REFRESH_TOKEN,
			method: "POST",
			url: `${BASE_URL}/oauth/v2/token`,
			data: {
				grant_type: "refresh_token",
				client_id: CLIENT_ID,
				client_secret: CLIENT_SECRET,
				refresh_token: getState().authorization.get('refresh_token'),
			},
			payload: {},
			afterError: (data) => {
				alert(data);
			},
		});
	};
}

export function getUserInfo() {
	return (dispatch, getState) => {
		dispatch({
			ajaxAction: true,
			name: GET_USER_INFO,
			method: 'GET',
			url: `${BASE_URL}/user`,
			headers: {
				Authorization: 'Bearer ODhiZTRkN2Y0ZGZlNTIyY2JiNGZmMTI5YTQ3YzFkY2UyOWViN2MyMDM3NTZkYWU5MTI2MWUxM2UwMjI4NWY0MA',
			},
			payload: {},
			afterError: (data) => {
				alert(data);
			},
		});
	};
}

