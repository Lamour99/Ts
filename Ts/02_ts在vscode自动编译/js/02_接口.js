// 接口：是一种内容，一种约束
(() => {
    // 输出姓名
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    // 定义的一个对象
    const person = {
        firstName: 'big',
        lastName: 'mouse'
    };
    console.log(showFullName(person));
})();
