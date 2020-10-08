module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            "jsx": true
        }
    },
    env: {
        browser: true,
    },
    rules: {
        "indent": ["error", 4, { SwitchCase: 1 }],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "no-console": 0,
        "arrow-parens": 0
    },
    parser: "babel-eslint",
    plugins: [
        "react"
    ]
};
