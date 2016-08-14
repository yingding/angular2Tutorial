/**
 * Created by yingdingwang on 7/31/16.
 */


class Greeter {
    constructor(public name: string) {}

    public greet() : string {
            return "Hello " + this.name;
    }


}

var greeter = new Greeter("World");

var greeting = greeter.greet();

console.log(greeting);