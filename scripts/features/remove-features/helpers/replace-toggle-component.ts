import { JsxAttribute, Node, SyntaxKind } from 'ts-morph';

const getAttributeByName = (attributes: JsxAttribute[], name: string) => {
    const jsxAttribute = attributes.find(a => a.getName() === name);
    return jsxAttribute;
}

const getReplacedComponent = (attribute: JsxAttribute | undefined) => {
    const value = attribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
        ?.getText();

    if (value && value.startsWith('(')) {
        return value.slice(1, -1);
    }

    return value;
}

export const replaceToggleComponent = (node: Node, removeFeatureName: string, featureState: string) => {
    const attributes = node.getDescendantsOfKind(
        SyntaxKind.JsxAttribute
    );

    if (!attributes) return;

    const onAttribute = getAttributeByName(attributes, 'on');
    const offAttribute = getAttributeByName(attributes, 'off');
    const featureNameAttribute = getAttributeByName(attributes, 'feature');

    const onValue = getReplacedComponent(onAttribute);
    const offValue = getReplacedComponent(offAttribute);
    const featureName = featureNameAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1);

    if (featureName !== removeFeatureName) return;

    if (featureState === 'on' && onValue) {
        node.replaceWithText(onValue);
    }

    if (featureState === 'off' && offValue) {
        node.replaceWithText(offValue);
    }
}