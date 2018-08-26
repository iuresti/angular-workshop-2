import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../../services/heroes.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html'
})
export class HeroCardComponent implements OnInit {

  @Input() hero: Hero;
  @Input() index: Number;

  constructor() {
  }

  ngOnInit() {
  }

}
