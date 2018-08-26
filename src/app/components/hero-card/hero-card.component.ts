import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Hero} from '../../services/heroes.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html'
})
export class HeroCardComponent implements OnInit {

  @Input() hero: Hero;

  constructor() {
  }

  ngOnInit() {
  }

}
