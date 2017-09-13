import config from 'config';

const { BASE_URL, CLIENT_ID, CLIENT_SECRET } = config;
const getAuthorizationHeaders = (getState) => {
	return {
		Authorization: `Bearer ${getState().authorization.get('access_token')}`,
	};
};


export function localCreateFeature(feature) {
	return {
		type: 'LOCAL_CREATE_FEATURE',
		payload: { feature },
	};
}

export function localDeleteFeature(featureId) {
	return {
		type: 'LOCAL_DELETE_FEATURE',
		payload: { featureId },
	};
}

export function localUpdateFeature(featureId, field, value) {
	return {
		type: 'LOCAL_UPDATE_FEATURE',
		payload: { featureId, field, value },
	};
}

// export function localUpdateFeature(featureId, field, value) {
//	return (dispatch, getState) => {
//		return dispatch({
//			type: 'LOCAL_UPDATE_FEATURE',
//			payload: { featureId, field, value },
//		});
//	};
// }


export function localCreateQuest(featureId, quest) {
	return {
		type: 'LOCAL_CREATE_QUEST',
		payload: { featureId, quest },
	};
}

export function localUpdateQuest(featureId, questId, field, value) {
	return {
		type: 'LOCAL_UPDATE_QUEST',
		payload: { featureId, questId, field, value },
	};
}

export function localDeleteQuest(featureId, questId) {
	return {
		type: 'LOCAL_DELETE_QUEST',
		payload: { featureId, questId },
	};
}

export function getFeatures() {
	return (dispatch, getState) => {
		dispatch({
			ajaxAction: true,
			method: 'GET',
			url: `${BASE_URL}/features`,
			headers: getAuthorizationHeaders(getState),
			payload: {},
			afterError: (data) => {
				alert(data);
			},
		});
	};
}

export function getQuests(feature) {
	return (dispatch, getState) => {
		dispatch({
			ajaxAction: true,
			method: 'GET',
			url: `${BASE_URL}/features/${feature}/quests`,
			headers: getAuthorizationHeaders(getState),
			payload: {},
			afterError: (data) => {
				alert(data);
			},
		});
	};
}

export function getSteps(feature, quest) {
	return (dispatch, getState) => {
		dispatch({
			ajaxAction: true,
			method: 'GET',
			url: `${BASE_URL}/features/${feature}/quests/${quest}/steps`,
			headers: getAuthorizationHeaders(getState),
			payload: {},
			afterError: (data) => {
				alert(data);
			},
		});
	};
}

export function createFeature(title, description, imageUrl) {
	return (dispatch, getState) => {
		dispatch({
			ajaxAction: true,
			method: 'POST',
			url: `${BASE_URL}/features`,
			headers: getAuthorizationHeaders(getState),
			data: {
				'feature[title]': title,
				'feature[description]': description,
				'feature[imageUrl]': imageUrl,
			},
			payload: {},
			afterError: (data) => {
				alert(data);
			},
		});
	};
}

export function updateFeature(feature, title, description, imageUrl) {
	return (dispatch, getState) => {
		dispatch({
			ajaxAction: true,
			method: 'PUT',
			url: `${BASE_URL}/features/${feature}`,
			headers: getAuthorizationHeaders(getState),
			data: {
				'feature[title]': title,
				'feature[description]': description,
				'feature[imageUrl]': imageUrl,
			},
			payload: {},
			afterError: (data) => {
				alert(data);
			},
		});
	};
}

export function deleteFeature(feature) {
	return (dispatch, getState) => {
		dispatch({
			ajaxAction: true,
			type: 'DELETE',
			url: `${BASE_URL}/features/${feature}`,
			headers: getAuthorizationHeaders(getState),
			payload: {},
			afterError: (data) => {
				alert(data);
			},
		});
	};
}

export function createQuest(feature, title, description, maxLevel) {
	return (dispatch, getState) => {
		dispatch({
			ajaxAction: true,
			method: 'POST',
			url: `${BASE_URL}/features/${feature}/quests`,
			headers: getAuthorizationHeaders(getState),
			data: {
				'quest[title]': title,
				'quest[description]': description,
				'quest[maxLevel]': maxLevel,
			},
			payload: {},
			afterError: (data) => {
				alert(data);
			},
		});
	};
}

export function updateQuest(feature, quest, title, description, maxLevel) {
	return (dispatch, getState) => {
		dispatch({
			ajaxAction: true,
			method: 'PUT',
			url: `${BASE_URL}/features/${feature}/quests/${quest}`,
			headers: getAuthorizationHeaders(getState),
			data: {
				'quest[title]': title,
				'quest[description]': description,
				'quest[maxLevel]': maxLevel,
			},
			payload: {},
			afterError: (data) => {
				alert(data);
			},
		});
	};
}

export function deleteQuest(feature, quest) {
	return (dispatch, getState) => {
		dispatch({
			ajaxAction: true,
			type: 'DELETE',
			url: `${BASE_URL}/features/${feature}/quests/${quest}`,
			headers: getAuthorizationHeaders(getState),
			payload: {},
			afterError: (data) => {
				alert(data);
			},
		});
	};
}

export function createStep(feature, quest, comment) {
	return (dispatch, getState) => {
		dispatch({
			ajaxAction: true,
			method: 'POST',
			url: `${BASE_URL}/features/${feature}/quests/${quest}/steps`,
			headers: getAuthorizationHeaders(getState),
			data: {
				comment: comment,
			},
			payload: {},
			afterError: (data) => {
				alert(data);
			},
		});
	};
}

// export function updateStep(feature, quest, title, description, maxLevel) {
// 	return (dispatch, getState) => {
// 		dispatch({
// 			ajaxAction: true,
// 			method: 'PUT',
// 			url: `${BASE_URL}/features/${feature}/quests/${quest}/steps`,
// 			headers: getAuthorizationHeaders(getState),
// 			data: {
// 				'quest[title]': title,
// 				'quest[description]': description,
// 				'quest[maxLevel]': maxLevel,
// 			},
// 			payload: {},
// 			afterError: (data) => {
// 				alert(data);
// 			},
// 		});
// 	};
// }

export function deleteStep(feature, quest, step) {
	return (dispatch, getState) => {
		dispatch({
			ajaxAction: true,
			type: 'DELETE',
			url: `${BASE_URL}/features/${feature}/quests/${quest}/steps/${step}`,
			headers: getAuthorizationHeaders(getState),
			payload: {},
			afterError: (data) => {
				alert(data);
			},
		});
	};
}

