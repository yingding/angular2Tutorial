/**
 * Created by yingdingwang on 8/13/16.
 */
import {Component} from '@angular/core';
import {ListComponent} from './list.component';
import {TextGenerator} from './demo.module';

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    directives: [ListComponent] /*inject ListComponent Directive*/
})
export class AppComponent {
    public count : number = 2;
    public indicator : boolean = true;
    public messages : string[] = ['Alpha', 'Bravo', 'Charlie'];
    public title : string = 'Template Binding';

    public showPanel : boolean = true;

    public getStyles() {
        return {
            'font-style':'italic',
            'font-weight':'bold'
        }
    }
    public getClasses() {
        return {
            'highlight' : false,
            'strike': true
        } /*use true or false to add and remove the css classes to the DOM element class attribute*/
    }
    constructor() {
        let generator = new TextGenerator();
        //this.message = generator.GetText();
    }
}

