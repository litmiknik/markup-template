import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createInterface } from 'readline';

import config from './config.js';

const rl = createInterface(process.stdin, process.stdout);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const componentsPath = path.join(__dirname, config.componentsDir);

export function init(componentList) {
	if (componentList === '') {
		rl.setPrompt('Component(s) name: ');
		rl.prompt();
		rl.on('line', line => init(line).catch(printErrorMessage));
		return;
	}

	const componentNames = componentList.trim().split(/\s+/);

	const makeComponent = componentName => {
		const componentPath = path.join(componentsPath, componentName);

		return validateComponentName(componentName)
			.then(() => directoryExist(componentPath, componentName))
			.then(() => createDir(componentPath))
			.then(() => createFiles(componentPath, componentName))
			.then(() => importFiles(componentName))
			.then(() => getFiles(componentPath))
			.then(files => {
				const line = '-'.repeat(56 + componentName.length);

				console.log(line);
				console.log(`The component has just been created in 'src/components/${componentName}'`);
				console.log(line);

				files.forEach(file => console.log(file));

				rl.close();
			});
	};

	const promises = componentNames.map(name => makeComponent(name));
	return Promise.all(promises);
}

function validateComponentName(componentName) {
    return new Promise((resolve, reject) => {
        const isValid = /^(\d|\w|-)+$/.test(componentName);

        if (isValid) {
			resolve(isValid);
		} else {
			const errMsg = (
				`ERR>>> An incorrect component name '${componentName}'\n` +
				`ERR>>> A component name must include letters, numbers & the minus symbol.`
			);
			reject(errMsg);
		}
    });
}

function directoryExist(componentPath, componentName) {
	return new Promise((resolve, reject) => {
		fs.stat(componentPath, notExist => {
			if (notExist) {
				resolve();
			} else {
				reject(`ERR>>> The component '${componentName}' already exists.`);
			}
		});
	});
}

function createDir(dirPath) {
	return new Promise((resolve, reject) => {
		fs.mkdir(dirPath, err => {
			if (err) {
				reject(`ERR>>> Failed to create a folder '${dirPath}'`);
			} else {
				resolve();
			}
		});
	});
}

function createFiles(componentPath, componentName) {
	const promises = [];

	Object.keys(config.fileSources).forEach(ext => {
		const fileSource = config.fileSources[ext].replace(/\{componentName}/g, componentName);
		const filename = `${componentName}.${ext}`;
		const filePath = path.join(componentPath, filename);

		promises.push(
			new Promise((resolve, reject) => {
				fs.writeFile(filePath, fileSource, 'utf8', err => {
					if (err) {
						reject(`ERR>>> Failed to create a file '${filePath}'`);
					} else {
						resolve();
					}
				});
			})
		);
	});

	return Promise.all(promises);
}

function importFiles(componentName) {
	const promises = [];

	Object.keys(config.fileSources).forEach(ext => {
		const fileSource = config.importSources[ext].line.replace(/\{componentName}/g, componentName);
		const filePath = path.join(__dirname, config.importSources[ext].file);

		promises.push(
			new Promise((resolve, reject) => {
				fs.appendFile(filePath, fileSource, 'utf8', err => {
					if (err) {
						reject(`ERR>>> Failed append line to file '${filePath}'`);
					} else {
						resolve();
					}
				});
			})
		);
	});

	return Promise.all(promises);
}

function getFiles(componentPath) {
	return new Promise((resolve, reject) => {
		fs.readdir(componentPath, (err, files) => {
			if (err) {
				reject(`ERR>>> Failed to get a file list from a folder '${componentPath}'`);
			} else {
				resolve(files);
			}
		});
	});
}

function printErrorMessage(errText) {
	console.log(errText);
	rl.close();
}