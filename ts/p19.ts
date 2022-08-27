/**
 * interface 接口
 * 用来定义一个类结构，用来定义一个类中包含哪些属性和方法
 * 同时接口也可以当做类型声明来使用
 */

// 描述一个对象的类型
type myType = {
  name: string;
  age: number;
};

interface myInter {
  name: string;
  age: number;
}
interface myInter {
  gender: string;
}
const obj: myInter = {
  name: "民",
  age: 13,
  gender: "男",
};

/**
 * interface 接口
 * 接口可以在定义类的时候限制类的结构
 * 接口中的所有属性都不能有实际值
 * 接口只定义对象的结构，而不考虑实际值
 * 在接口中所有的方法都是抽象方法
 */
interface myInters {
  name: string;
  sayHello(): void;
}
/**
 * 定义类时，可以用类去实现一个接口
 * 实现接口就是使类满足接口的要求
 */
class MyClass19 implements myInters {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello(): void {
    console.log("hello");
  }
}
