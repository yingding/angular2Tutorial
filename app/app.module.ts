/**
 * Created by yingding wang on 9/18/16.
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import {routing} from './app.routing';


@NgModule({
    // imports array, contains the list of external modules used by this application
    imports: [
        BrowserModule,
        FormsModule,
        routing // add routing to imports, since it is a preconfigurated ModuleWithProviders
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}