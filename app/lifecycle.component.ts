/**
 * Created by yingdingwang on 8/21/16.
 */
import {Component, OnInit, AfterContentInit, AfterViewInit} from '@angular/core';

@Component({
    selector: 'lifecycle-component',
    templateUrl: 'app/lifecycle.component.html',
    directives: []
})
export class LifecycleComponent implements OnInit, AfterContentInit, AfterViewInit {
    messages : string[] = [];
    public ngOnInit () {
        this.messages.push('OnInit');
    }
    public ngAfterContentInit() {
        this.messages.push('AfterContentInit');
    }
    public ngAfterViewInit() {
        this.messages.push('AfterViewInit');
    }

}