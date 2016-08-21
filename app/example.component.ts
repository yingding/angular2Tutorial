/**
 * Created by yingdingwang on 8/13/16.
 */

import {Component, OnInit} from '@angular/core';
@Component({
    selector: 'example-component',
    template: 'app/example.component.html'
})
export class ExampleComponent implements OnInit{
    public message: string;
    constructor() {}
    public ngOnInit(){
        this.message = 'Hello World';
    }

}
