import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HeroesComponent} from './heroes.component';

// Routes are an array of route definitions
const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    }
];

// export a routing constant. This routing constant is a configured router module, which should be added to root NgModule
// The forRoot method returns Router service providers and directives need for routing
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
