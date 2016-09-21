/**
 * Created by yingdingwang on 9/21/16.
 */
import {Injectable} from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    // returning Promise of Hero[] in async way, instead of Hero[]
    getHeroes() : Promise<Hero[]> {
        return Promise.resolve(HEROES); // return an Immediatley resolved Promise
    }

    getHeroesSlowly() : Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)).then(() => this.getHeroes());
    }
}