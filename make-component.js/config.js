const componentsDir = '../src/components';
const fileSources = {
    pug: `mixin {componentName}()\n\t.{componentName}&attributes(attributes)\n\t\t`,
    scss: `.{componentName} {\n\tdisplay: block;\n}`
};
const importSources = {
    pug: {
        line: `include ../../components/{componentName}/{componentName}.pug\n`,
        file: '../src/templates/utils/components.pug'
    },
    scss: {
        line: `@import '../../components/{componentName}/{componentName}.scss';\n`,
        file: '../src/styles/utils/components.scss'
    }
};

export default {
    componentsDir,
    fileSources,
    importSources
};