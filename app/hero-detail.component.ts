/**
 * Created by yingdingwang on 9/18/16.
 */

import {Component, Input} from '@angular/core';
import {Hero} from './hero';

@Component({
    selector: 'demo-hero-detail',
    template: `
<!-- if hero is not undefined-->
<div *ngIf="hero">
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name:</label>
    <!-- two binding, () event binding from template to component + [] property binding from component to template -->
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>
</div>
`
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}