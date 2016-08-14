/**
 * Created by yingdingwang on 8/13/16.
 */
import {Component} from '@angular/core';
import {ListComponent} from './list.component';

@Component({
    selector: 'demo-app',
    templateUrl: 'app.component.html',
    directives: [ListComponent]
})
export class AppComponent {}
