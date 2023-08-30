import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/config';

export function buildPlugins({
    paths,
    isDev,
    analyze,
    apiUrl,
    project
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const isProd = !isDev;

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project)
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true
                },
                mode: 'write-references'
            }
        })
    ];

    // Если дев сборка, то дабавляем плагины для разработки
    if (isDev) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new ReactRefreshWebpackPlugin()
        );
    }

    // Если прод сборка, то дабавляем плагины для продакшена
    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css'
            }),
            new CopyPlugin({
                patterns: [{ from: paths.locales, to: paths.buildLocales }]
            })
        );
    }

    if (analyze) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}
