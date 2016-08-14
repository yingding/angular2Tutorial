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
    public message : string;
    constructor() {
        let generator = new TextGenerator();
        this.message = generator.GetText();
    }
}

