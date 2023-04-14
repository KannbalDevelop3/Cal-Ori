module.exports = {
    module: {
        rules: [
            {
                "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};