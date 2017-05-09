module.exports = {
    "root": true, //将 ESLint 限制到一个特定的项目,ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
    "env": {
        "browser": true, //代码运行在浏览器/browser 全局变量。
        "node": true, // Node.js 全局变量和 Node.js 作用域。
        "commonjs": true, //CommonJS 全局变量和 CommonJS 作用域 (仅为使用 Browserify/WebPack 写的只支持浏览器的代码)。
        "es6": true, //支持除模块外所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
        "jquery": true, //jQuery 全局变量。
    },
    //"extends": "eslint:recommended",
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
    ], //扩展ESLint规则，最佳实践的规则是Airbnb Style Guide，Airbnb还开源了他们自己的ESlint配置。
    "installedESLint": true,
    "parserOptions": {
        "experimentalObjectRestSpread": true,
        "ecmaVersion": 6, //指定你想要使用的 ECMAScript 版本
        "ecmaFeatures": { //这是个对象，表示你想使用的额外的语言特性:
            "jsx": true, //启用JSX文件
            "arrowFunctions": true,
            "classes": true,
            "modules": true,
            "defaultParams": true
        },
        "sourceType": "module" //设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    },
    globals: {
        // Put things like jQuery, etc
        jQuery: true,
        $: true,
    },
    "parser": "babel-eslint",
    "plugins": [
        "react", //使用react
        "html"
    ],
    "rules": {
        "prop-types": [2], //要求组件指定PropTypes
        "no-unused-vars": 0, //不想看到no-unused-vars(为使用过的变量定义)的警告
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error", //开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
            "always"
        ],
            // "no-empty": 0,
            // "comma-dangle": 0,
            // "no-unused-vars": 0,
            // "no-console": 0,
            // "no-const-assign": 2,
            // "no-dupe-class-members": 2,
            // "no-duplicate-case": 2,
            // "no-extra-parens": [2, "functions"],
            // "no-self-compare": 2,
            // "accessor-pairs": 2,
            // "comma-spacing": [2, {
            //     "before": false,
            //     "after": true
            // }],
            // "constructor-super": 2,
            // "new-cap": [2, {
            //     "newIsCap": true,
            //     "capIsNew": false
            // }],
            // "new-parens": 2,
            // "no-array-constructor": 2,
            // "no-class-assign": 2,
            // "no-cond-assign": 2
    }
};
