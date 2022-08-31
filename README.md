TypeScript 的特点
1.TypeScript 主要有 3 大特点：

始于JavaScript，归于JavaScript
TypeScript 可以编译出纯净、 简洁的 JavaScript 代码，并且可以运行在任何浏览器上、Node.js 环境中和任何支持 ECMAScript 3（或更高版本）的JavaScript 引擎中。

强大的类型系统
类型系统允许 JavaScript 开发者在开发 JavaScript 应用程序时使用高效的开发工具和常用操作比如静态检查和代码重构。

先进的 JavaScript
TypeScript 提供最新的和不断发展的 JavaScript 特性，包括那些来自 2015 年的 ECMAScript 和未来的提案中的特性，比如异步功能和 Decorators，以帮助建立健壮的组件。

2. 安装 TypeScript
命令行运行如下命令，全局安装 TypeScript：
npm install -g typescript

安装完成后，在控制台运行如下命令，检查安装是否成功(3.x)：
tsc -V 

3. 第一个 TypeScript 程序
总结：ts的文件中如果直接书写js语法的代码，那么再html文件中直接引入ts文件，在谷歌浏览器中是可以直接使用的
     如果ts文件中有了ts的语法代码，那么就需要把这个ts文件编译成Js的文件，在html文件中引入js的文件来使用
