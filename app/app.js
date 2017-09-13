import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import configureStore from 'store/configureStore';
import createRoutes from 'routes/index';
import { Provider } from 'react-redux';
import { saveAuthorizationData, loadState } from 'lib/persistentStorage';

const reduxState = loadState();
const izomorphicState = { initial: true };

const store = configureStore(reduxState);

store.subscribe(() => {
	const accessToken = store.getState().authorization.get('access_token');
	const refreshToken = store.getState().authorization.get('refresh_token');

	saveAuthorizationData({ accessToken, refreshToken });
});


ReactDOM.render((
	<Provider store={store}>
		{createRoutes(browserHistory, izomorphicState)}
	</Provider>
), document.getElementById('root'), () => izomorphicState.initial = false);
