/**
 * Created by yingdingwang on 7/31/16.
 */


class GreeterOld {
    constructor(public name: string) {}

    public greet() : string {
            return "Hello " + this.name;
    }


}

var greeterOld = new GreeterOld("World");

var greetingOld = greeterOld.greet();

console.log(greetingOld);