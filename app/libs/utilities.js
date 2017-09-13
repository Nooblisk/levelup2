export const generateUUID = function () {
	return 'xxxxx'.replace(/[x]/g, () => Math.floor(Math.random() * 8) + 1);
};
