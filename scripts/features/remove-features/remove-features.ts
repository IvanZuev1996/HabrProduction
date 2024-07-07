import { Project, SyntaxKind } from 'ts-morph';

import { isToggleComponent } from './helpers/is-toggle-component';
import { isToggleFunction } from './helpers/is-toggle-function';
import { replaceToggleComponent } from './helpers/replace-toggle-component';
import { replaceToggleFunc } from './helpers/replace-toggle-func';

const removeFeatureName = process.argv[2]; // example: isArticleEnabled
const featureState = process.argv[3]; // example: off, on

if (!removeFeatureName) {
    throw new Error('Укажите название фичи-флага!');
}

if (!featureState) {
    throw new Error('Укажите состояние фичи (on/off)');
}

if (featureState !== 'on' && featureState !== 'off') {
    throw new Error('Укажите корректное значение состояния фичи (on/off)');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            replaceToggleFunc(node, removeFeatureName, featureState);
        }

        if (node.isKind(SyntaxKind.JsxSelfClosingElement) && isToggleComponent(node)) {
            replaceToggleComponent(node, removeFeatureName, featureState);
        }
    });
});

project.save();
