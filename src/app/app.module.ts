import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OddComponent } from './Components/odd/odd.component';
import { EvenComponent } from './Components/even/even.component';
import { GameControlComponent } from './Components/game-control/game-control.component';

@NgModule({
  declarations: [
    AppComponent,
    OddComponent,
    EvenComponent,
    GameControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
