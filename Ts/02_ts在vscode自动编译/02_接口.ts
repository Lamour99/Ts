// 接口：是一种内容，一种约束

(() =>{
    // 定义一个接口
    interface IPerson {
        firstName: string
        lastName: string
    }
    // 输出姓名
    function showFullName(person: IPerson){
        return person.firstName+ '_' + person.lastName
    }

    // 定义的一个对象
    const person ={
        firstName: 'big',
        lastName: 'mouse'
    }
    console.log(showFullName(person));
    
})()