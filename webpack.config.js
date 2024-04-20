const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    devtool: 'source-map',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
        clean: true,
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.*'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Helya Moradi | Portfolio',
            template: path.resolve(__dirname, './index.html')
        }),

        new MiniCssExtractPlugin(),

        new FaviconsWebpackPlugin('./src/assets/favicon.ico'),

        new CopyPlugin({
            patterns: [
                {
                    from: 'public',
                    to: '.'
                }
            ],
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]_[hash:base64:4]'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.[tj]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: path.resolve(__dirname, 'babel.config.js')
                    }
                }
            },

            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]_[hash:base64:4]'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: '@import "src/theme/colors.sass"',
                        },
                    }
                ]
            },

            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },

            {
                test: /\.(png|svg|jpg|gif|pdf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images'
                        }
                    }
                ]
            }
        ],
    },
};
