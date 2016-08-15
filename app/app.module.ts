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

@NgModule({
    imports : [BrowserModule, FormsModule],
    declarations: [AppComponent],/* components and directive that belongs to this module*/
    bootstrap: [AppComponent]
})

export class AppModule {}