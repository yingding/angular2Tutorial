import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
    selector: 'demo-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
//     template: `
// <!-- if hero is not undefined-->
// <div *ngIf="hero">
//   <h2>{{hero.name}} details!</h2>
//   <div><label>id: </label>{{hero.id}}</div>
//   <div>
//     <label>name:</label>
//     <!-- two binding, () event binding from template to component + [] property binding from component to template -->
//     <input [(ngModel)]="hero.name" placeholder="name">
//   </div>
// </div>
// <button (click)="goBack()">Back</button>
// `
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        // forEach , deliver array of route parameters
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; //+ operator convert string to number
            this.heroService.getHero(id)
                .then(hero => this.hero = hero)
        })
    }

    //browser's history stack back
    goBack(): void {
        window.history.back();
    }
}