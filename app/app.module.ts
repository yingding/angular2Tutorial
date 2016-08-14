/**
 * Created by yingdingwang on 8/14/16.
 */
/**
 * this my demo - app root module
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

@NgModule({
    imports : [BrowserModule],
    declarations: [AppComponent],/* components and directive that belongs to this module*/
    bootstrap: [AppComponent]
})

export class AppModule {}