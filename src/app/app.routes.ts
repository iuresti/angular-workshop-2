import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {HerosComponent} from './components/heros/heros.component';
import {HeroComponent} from './components/hero/hero.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heroes', component: HerosComponent},
  {path: 'hero/:id', component: HeroComponent},
  {path: 'heroes/search/:criteria', component: HerosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
