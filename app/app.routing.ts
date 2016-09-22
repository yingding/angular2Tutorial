import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';

// Routes are an array of route definitions
const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id', // using colon(:) in the path to indicate a placeholder
        component: HeroDetailComponent
    }
];

// export a routing constant. This routing constant is a configured router module, which should be added to root NgModule
// The forRoot method returns Router service providers and directives need for routing
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
