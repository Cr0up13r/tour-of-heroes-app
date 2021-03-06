import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  public hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  constructor() { }

  ngOnInit(): void {
  }
}
