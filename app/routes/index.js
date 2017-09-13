import React from 'react';
import { Router, Route } from 'react-router';
import App from 'containers/App';


// export const routes = (
// 	<div>
// 		<Route path='/' component={App} />
//
// 	</div>
// );
//
// export const app = '/';


function prepareComponent(izomorphicState, Component, props) {
	return (<Component
		initialRender={izomorphicState.initial}
		{...props}
	/>);
}


export default function (history, izomorphicState) {
	return (
		<Router history={history} createElement={prepareComponent.bind(this, izomorphicState)}>
			<Route path='/' component={App} />
		</Router>
	);
}
