/**
 * Created by yingdingwang on 8/21/16.
 */

export interface IGreetingGenerator {
    getGreeting() : string;
}

export class ModernGreetingGenerator implements IGreetingGenerator {

    public getGreeting(): string {
        return 'Salutations';
    }
}

export class GreetingGenerator implements IGreetingGenerator {
    public getGreeting(): string {
        return 'Hello';
    }
}

export class Greeter {
    constructor(private _greetingGenerator : IGreetingGenerator) {}
    public greet(name : string) {
        return this._greetingGenerator.getGreeting() + name;
    }
}

var greeter = new Greeter(new ModernGreetingGenerator())
var g_text = greeter.greet('World');
console.log(g_text);