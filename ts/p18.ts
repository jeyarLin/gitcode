/**
 * 抽象类 abstract
 * 以abstract开头的类是抽象类
 * --抽象类和其他类差别不大，只是不能用来创建对象，不能new
 * --抽象类就是专门用来被继承的类
 * --抽象类中可以添加抽象方法
 */
abstract class A18 {
  constructor(public name: string) {}
  /**
   * 定义一个抽象方法
   * 抽象方法使用abstract开头，没有方法体
   * 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
   */
  abstract sayHello(): void;
}
class B18 extends A18 {
  sayHello(): void {
    console.log("ddd");
  }
}
