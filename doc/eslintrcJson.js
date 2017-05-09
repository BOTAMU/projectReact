{
    "env": {
        "browser": true,//代码运行在浏览器/browser 全局变量。
        "node": true,// Node.js 全局变量和 Node.js 作用域。
        "commonjs": true,//CommonJS 全局变量和 CommonJS 作用域 (仅为使用 Browserify/WebPack 写的只支持浏览器的代码)。
        "es6": true,//支持除模块外所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
        "jquery":true,//jQuery 全局变量。
    },
    //"extends": "eslint:recommended",
    "extends": "airbnb",//扩展ESLint规则，最佳实践的规则是Airbnb Style Guide，Airbnb还开源了他们自己的ESlint配置。
    "parserOptions": {
        "ecmaVersion": 6,//指定你想要使用的 ECMAScript 版本
        "ecmaFeatures": {//这是个对象，表示你想使用的额外的语言特性:
            "jsx": true//启用JSX文件
        },
        "sourceType": "module"//设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    },
    "plugins": [
        "react"//使用react
    ],
    "globals": {
        "var1": true,//设置每个变量等于 true 允许变量被重写
        "var2": false//或 false 不允许被重写。
    },
    "rules": {
        "prop-types": [2],//要求组件指定PropTypes
        "no-unused-vars": 0,//不想看到no-unused-vars(为使用过的变量定义)的警告
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [//项目中使用双引号
            "error",
            "double"
        ],
        "semi": [
            "error",//开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
            "always"
        ]
    }
}