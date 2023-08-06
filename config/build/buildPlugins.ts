import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({
    paths,
    isDev,
    analyze,
    apiUrl,
    project
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project)
        }),
        new CopyPlugin({
            patterns: [{ from: paths.locales, to: paths.buildLocales }]
        })
    ];

    // Если дев сборка, то дабавляем плагины для разработки
    if (isDev) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new ReactRefreshWebpackPlugin(),
            new CircularDependencyPlugin({
                exclude: /node_modules/,
                failOnError: true
            })
        );
    }

    if (analyze) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}
