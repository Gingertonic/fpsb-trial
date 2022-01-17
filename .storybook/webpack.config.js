const path = require('path');
const svgAssets = path.resolve(__dirname, '../src/assets/svgs');

module.exports = async ({ config, mode }) => {
    const loadRule = config.module.rules.find(rule => rule.test.test('.svg'));
    loadRule.exclude = svgAssets;

    config.module.rules.push({
        test: /\.svg$/,
        use: [
        {
            loader: "babel-loader"
        },
        {
            loader: "react-svg-loader",
            options: {
                jsx: true
            }
        }
        ]
    });

    config.module.rules.push({
        test: /\.(ttf|otf|woff|woff2)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]'
                }
            }
        ]
    })

    // config.module.rules.push({
    //     exclude: /node_modules/,
    //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
    //     type: 'asset/resource'
    // })

    return config;
};