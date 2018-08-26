import {Component, OnInit} from '@angular/core';
import {Hero, HeroesService} from '../../services/heroes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html'
})
export class HerosComponent implements OnInit {

  heroes: Hero[];

  constructor(private activatedRouter: ActivatedRoute,
              private _heroesService: HeroesService) {
  }

  ngOnInit() {
    console.log('onInit heroes component');

    this.activatedRouter.params.subscribe(params => {
      if (params['criteria']) {
        this.heroes = this._heroesService.searchHeroes(params['criteria']);
      } else {
        this.heroes = this._heroesService.getHeroes();
      }
    });


  }

}
