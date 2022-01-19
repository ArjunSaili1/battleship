module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["plugin:@shopify/esnext"],
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "rules": {
    },
    "plugins": ["prettier"]
};