import { DefinePlugin, RuleSetRule } from 'webpack';

import path from 'path';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        'storybook-addon-themes'
    ],

    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },

    docs: {
        autodocs: true,
        defaultName: 'Docs'
    },


    features: { storyStoreV7: false },

    async webpackFinal(config, { configType }) {
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

        config!.module!.rules = config.module?.rules?.map(
            // @ts-ignore
            (rule: RuleSetRule) => {
                if (/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }
                return rule;
            }
        );

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
    }
};

export default config;
