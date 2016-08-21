/**
 * Created by yingdingwang on 8/21/16.
 */


import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
    selector: 'child-component',
    template: '<h2>Child Component</h2><blockquote><strong></strong>value: {{watchValue}}</blockquote>',
    directives: []
})
export class ChildComponent implements OnInit{
    @Input() watchValue : number;
    ngOnInit() {
        console.log('ChildComponent Initialized');
    }
    ngOnChanges(changes: any){ // Type can be specified and different as any
        //OnChanges return a collection/Array of changes
        console.log('ChildComponent Property [watchValue] Changed: ' + changes['watchValue'].currentValue + '');
    }
}