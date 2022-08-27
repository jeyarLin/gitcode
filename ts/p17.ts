/**
 * super 关键字
 */
class A17 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello(): void {
    console.log("动物在叫。。");
  }
}
class B17 extends A17 {
  age: number;
  constructor(name: string, age: number) {
    // 如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
    super(name); // 调用父类的构造函数
    this.age = age;
  }
  sayHello(): void {
    // 在类的方法中，super 表示当前类的父类
    // super.sayHello(); 调用父类方法
    console.log("汪汪；；");
  }
}

const dog = new B17("来福", 11);
console.log(dog);
dog.sayHello();
