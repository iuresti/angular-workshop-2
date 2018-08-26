import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// components
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HerosComponent} from './components/heros/heros.component';

// routes
import {APP_ROUTING} from './app.routes'
import {HeroesService} from './services/heroes.service';
import { HeroComponent } from './components/hero/hero.component';
// services

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HerosComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
