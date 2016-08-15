/**
 * Created by yingdingwang on 8/14/16.
 */
/**
 * this my demo - app root module
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; /*need to import this for two-way binding ngModule */
import {AppComponent} from './app.component';
import {HttpModule, JsonpModule} from '@angular/http';
import {DemoService} from './demo.service';

@NgModule({
    imports : [BrowserModule, FormsModule, HttpModule, JsonpModule],
    declarations: [AppComponent],/* components and directive that belongs to this module*/
    providers:[DemoService], /* custom service for injection must be listed in module providers attributes*/
    bootstrap: [AppComponent]
})

export class AppModule {}