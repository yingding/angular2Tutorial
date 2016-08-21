import {IGreetingGenerator, Greeter} from "./injection.component";
import * as Moment from "moment";
//import * as Jasmine from "jasmine";

/**
 * Created by yingdingwang on 8/21/16.
 */

class FakeGreeter implements IGreetingGenerator {
    public getGreeting(): string {
        return 'Test';
    }

}

// Using Jasmine unit tests
describe('Greeter class', ()=>{
    it('true is true', function(){ expect(true).toEqual(true); });
    var greeter = new Greeter(new FakeGreeter());
    it('Can append a space and name to the greeting', ()=>{
        var result = greeter.greet('Example');
        expect(result).toBe('Test Example');
    });
});


