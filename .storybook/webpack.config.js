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

    return config;
};