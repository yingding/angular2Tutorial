/**
 * Created by yingdingwang on 9/18/16.
 */

import { Component, OnInit } from '@angular/core';

import {Hero} from './hero';
import {Router} from '@angular/router';
import {HeroService} from './hero.service';


@Component({
    selector: 'my-heroes',
    // removed to NgModule
    // providers: [HeroService], // using providers decorator to create an instance of HeroSerivce.
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit{

    heroes : Hero[];
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heros => this.heroes = heros);
    }

    // getHeroesSlowly(): void {
    //     this.heroService.getHeroesSlowly().then(heros => this.heroes = heros);
    // }


    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) {return;}
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            })
    }
}