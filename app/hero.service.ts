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
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    getHeroes(): Promise<Hero[]> {
        // Angular http.get returns an RxJS Observable
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    private handleError(error: any) :Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);

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
        // ES6 Lambda Expressions, arrow functions or anonymous functions
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            // no good , then get a function() {return hero} from the funciton closure. hero is an implicit return.
            // http://stackoverflow.com/questions/28889450/when-should-i-use-return-in-es6-arrow-functions
            // there shouldn't any block {}, otherwise an explicit return is needed.
            .toPromise().then(() => hero)
            // then returns a Promise back
            .catch(this.handleError);
    }
    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError)
    }

    delete(id: number): Promise<void> {
        let url=`${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}