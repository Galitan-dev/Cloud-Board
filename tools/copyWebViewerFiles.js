/* eslint-disable no-console */
const { copy } = require('fs-extra');

const copyFiles = async () => {
	try {
		await copy(
			'./node_modules/@pdftron/webviewer/public',
			'./client/static/webviewer/'
		);
		console.log('WebViewer files copied over successfully');
	} catch (err) {
		console.error(err);
	}
};

copyFiles();
