const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const appDir = path.resolve(__dirname, "./src");
const outDir = path.resolve(__dirname, "./www");

const rootWebpackConfig = (env, argv) => {
    return {
        devServer: {
            compress: false,
            historyApiFallback: true,
            open: true,
            port: 7003,
        },
        entry: {
            app: path.resolve(appDir, "index.tsx"),
        },
        output: {
            path: outDir,
            filename: "[name].[contenthash].js",
        },
        mode: argv.mode || "development",
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /.tsx?$/,
                    use: [
                        {
                            loader: "ts-loader",
                            options: {
                                configFile: path.resolve(__dirname, "tsconfig.json"),
                                compilerOptions: {
                                    declaration: false,
                                },
                            },
                        },
                    ],
                },
                {
                    test: /message\-system\.min\.js/,
                    use: {
                        loader: "worker-loader",
                    },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                contentBase: outDir,
                inject: "body",
                template: path.resolve(appDir, "index.html"),
                publicPath: "./",
            }),
        ],
        resolve: {
            extensions: [".js", ".ts", ".tsx", ".jsx", ".json", ".css"],
        },
    };
} 

module.exports = [rootWebpackConfig];