import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
    //template: `<h3>My Dashboard</h3>`
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService
    ) {}

    ngOnInit(): void {
        this.heroService.getHeroes()
        // slice method selects the element 2nd and 5th
            .then(heroes => this.heroes = heroes.slice(1, 5))
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id]; // this route link has two params
        this.router.navigate(link);
    }
}
