/**
 * Created by yingdingwang on 9/21/16.
 */
import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
//import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes'; // URL to web api

    constructor(private http: Http) {
    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    handleError() :void {

    }
    // commented out this local mock service, replace with Http client and in-memory-data
    // // returning Promise of Hero[] in async way, instead of Hero[]
    // getHeroes() : Promise<Hero[]> {
    //     return Promise.resolve(HEROES); // return an Immediatley resolved Promise
    // }

    // getHeroesSlowly() : Promise<Hero[]> {
    //     return new Promise<Hero[]>(resolve =>
    //         setTimeout(resolve, 2000)).then(() => this.getHeroes());
    // }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}