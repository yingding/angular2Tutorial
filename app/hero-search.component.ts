import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {HeroSearchService} from './hero-search.service';
import {Hero} from './hero';

@Component({
    selector: 'hero-search',
    templateUrl: 'app/hero-search.component.html',
    styleUrls: ['app/hero-search.component.css'],
    providers: [HeroSearchService] // initialize a local provider
})
export class HeroSearchComponent implements OnInit {
    // A stream of Hero Arrays
    heroes: Observable<Hero[]>;
    // A subject is a producer of an observalbe event stream; searchTerms produces an Observable of strings, the filter criteria for the name search.
    private searchTerms = new Subject<string>();

    constructor(
       private heroSearchSerivce: HeroSearchService,
       private router: Router
    ) {}

    // Push a search term into the observable stream.
    search(term: string): void {
        // each call to search puts a new string into this subject's observable stream by calling next
        this.searchTerms.next(term);
    }
    // switchMap: formerly known as "flatMapLastest. swithMap preserves the original request order while returing only the observable from the most recent http method call. Results from prior calls are canceled and discarded.
    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as prvious
            .switchMap( term => term // switch to new observable each time
                // return the http search observable
                ? this.heroSearchSerivce.search(term)
                // or the observable of empty heroes if no search term
                : Observable.of<Hero[]>()
            )
            .catch(error => {
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }
    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

}