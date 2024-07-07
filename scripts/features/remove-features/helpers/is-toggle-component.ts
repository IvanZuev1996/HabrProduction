import { Node, SyntaxKind } from 'ts-morph';

import { toggleComponentName } from '../../consts';

export const isToggleComponent = (node: Node) => {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);
    return identifier?.getText() === toggleComponentName;
}