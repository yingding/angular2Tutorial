/**
 * Created by yingdingwang on 8/13/16.
 */
import {Component, OnInit} from '@angular/core';
import {ListComponent} from './list.component';
//import {TextGenerator} from './demo.module';
import {DemoService} from './demo.service'; // also imported name space for DemoService
//import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';


import './rxjs-operators';
import {ChildComponent} from "./child.component";
import {LifecycleComponent} from "./lifecycle.component";
import * as Moment from "moment";
import {IfNotDirective} from "./directive/ifnot.directive";



@Injectable()
@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    directives: [ListComponent, ChildComponent, LifecycleComponent, IfNotDirective] /*inject ListComponent Directive*/
})
export class AppComponent implements OnInit {
    public count : number = 2;
    public indicator : boolean = true;
    public messages : string[] = ['Alpha', 'Bravo', 'Charlie'];
    public title : string = 'Template Binding';
    public origin : string;
    public errorMessage : string;

    public showPanel : boolean = true;

    // for child component
    public currentValue : number = 3;

    // moment section
    public currentDate : string;
    public sinceDate : string;

    public flag : boolean;

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
        } //use true or false to add and remove the css classes to the DOM element class attribute
    }
    constructor(private demoService : DemoService) {
        //let generator = new TextGenerator();
        //this.message = generator.GetText();
    }

    ngOnInit() {
        this.flag = true;
        this.currentDate = Moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
        this.sinceDate = Moment('2016-01-01', 'YYYY-MM-DD').fromNow();
        this.demoService.getItems()
            .subscribe(
                ipdata => this.origin = ipdata.origin,
                error => this.errorMessage = <any> error
            );
        console.log('AppComponent Initialized');
    }

}

