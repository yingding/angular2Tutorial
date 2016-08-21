/**
 * Created by yingdingwang on 8/22/16.
 */
import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[ngIfNot]',
})
export class IfNotDirective{
    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef ){}
    // decorator always call with ()
    @Input() set ngIfNot(condition: boolean) {
        if (!condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}