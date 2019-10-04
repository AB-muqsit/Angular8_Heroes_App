import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../Components/App/app.component';
import { HelloComponent } from './hello.component';
import { HeroesComponent } from '../Components/Heros/heros.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeroesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
