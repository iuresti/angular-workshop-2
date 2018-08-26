import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Hero, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {

  hero: Hero;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
    console.log('Algo' + activatedRoute.params);

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log('in subscribe of activatedRoute');
      this.hero = this._heroesService.getHero(params['id']);
    });
  }

}
