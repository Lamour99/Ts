// ts中书写js中的类
(() => {
    // 定义一个类型
    class Person {
        // 定义一个构造器函数
        constructor(firstname, lastName) {
            // 更新属性的数据
            this.firstName = firstname;
            this.lastName = lastName;
            this.fullName = this.firstName + '+' + this.lastName;
        }
    }
    // 定义一个函数
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    // 实例化对象
    const person = new Person('zhu', 'ge');
    console.log(showFullName(person));
})();
