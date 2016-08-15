/**
 * Created by yingdingwang on 8/13/16.
 */
import {Component} from '@angular/core';
import {ListComponent} from './list.component';
import {TextGenerator} from './demo.module';

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    directives: [ListComponent]
})
export class AppComponent {
    public count : number = 2;
    public indicator : boolean = true;
    public messages : string[] = ['Alpha', 'Bravo', 'Charlie'];
    public title : string = 'Template Binding';
    constructor() {
        let generator = new TextGenerator();
        //this.message = generator.GetText();
    }
}

