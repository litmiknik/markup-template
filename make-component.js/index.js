import { init } from './core.js';

const componentNameFromCLI = process.argv.slice(2).join(' ');

init(componentNameFromCLI);