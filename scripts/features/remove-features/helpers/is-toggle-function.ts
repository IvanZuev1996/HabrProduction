import { Node, SyntaxKind } from 'ts-morph';

import {toggleFunctionName} from '../../consts'

export const isToggleFunction = (node: Node) => {
    let isToggleFeature = false;

    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === toggleFunctionName
        ) {
            isToggleFeature = true;
        }
    });

    return isToggleFeature;
};