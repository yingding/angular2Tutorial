import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

/** Imports from loading & configuring the in-memory web api
  * The in-memory web api simulates a backend service
  * The InMemoryWebApiModule replaces the default Http client backend
  * with an in-memory web API alternative service.
  */
import {InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import {routing} from './app.routing';
import {DashboardComponent} from './dashboard.component';


@NgModule({
    // imports array, contains the list of external modules used by this application
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing // add routing to imports, since it is a preconfigurated ModuleWithProviders
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}