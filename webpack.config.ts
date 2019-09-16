import webpack from "webpack";
import path from "path";
import GasPlugin from "gas-webpack-plugin";

const config: webpack.Configuration = {
    mode: "development",
    entry: "./src/index.ts",
    devtool: false,
    output: {
        filename: "index.js",
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["es3ify-loader", "ts-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".ts"]
    },
    plugins: [new GasPlugin()]
};

export default config;
