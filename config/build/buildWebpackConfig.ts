import path from 'path';
import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(
    options: BuildOptions
): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options).filter(Boolean),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolves(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    };
}
