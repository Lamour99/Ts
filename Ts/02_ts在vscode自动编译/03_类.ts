// ts中书写js中的类
(()=>{
    // 定义一个接口
    interface IPerson{
        firstName: string // 姓氏
        lastName: string // 名字
    }
    // 定义一个类型
    class Person{
        firstName: string // 姓氏
        lastName: string // 名字
        fullName: string // 全名
        // 定义一个构造器函数
        constructor (firstname:string, lastName:string){
            // 更新属性的数据
            this.firstName = firstname
            this.lastName = lastName
            this.fullName = this.firstName + '+' + this.lastName
        }
    }
    // 定义一个函数
    function showFullName(person: IPerson){
        return person.firstName+ '_' + person.lastName
    }

    // 实例化对象
    const person = new Person('zhu', 'ge')
    console.log(showFullName(person));
    
    
})()