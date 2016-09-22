import { Component } from '@angular/core';

@Component({
    selector: 'demo-app',
    template: `
    <h1>{{title}}</h1>
    <!-- Router Links, add an anchor tag to trigger the Routes, a slash is need before the path defined in Routes -->
    <a routerLink="/heroes">Heroes</a>
    <!-- Router Outlet Directive, defines where to show the view of component triggered by Routes, in other words, where RouterOutlet is, the view of component triggered by the Routes will be shown. -->
    <router-outlet></router-outlet>
`

})
export class AppComponent {
    // This component is now attached to a router and displaying routed views. This component is called a Router Component.
    title = 'Tour of Heroes';


}
