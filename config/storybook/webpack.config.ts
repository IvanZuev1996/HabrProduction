/* eslint-disable no-param-reassign */
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';

import path from 'path';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        buildLocales: '',
        locales: ''
    };
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('ts', 'tsx');

    config!.resolve!.modules = [
        path.resolve(__dirname, '../../src'),
        'node_modules'
    ];

    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': paths.src
    };

    // @ts-ignore
    config!.module!.rules = config.module?.rules?.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    config!.module!.rules!.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    });
    config!.module!.rules!.push(buildCssLoader(true));

    config!.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify('http://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook')
        })
    );

    return config;
};
