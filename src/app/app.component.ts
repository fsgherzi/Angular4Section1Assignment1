import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenList: number[] = [];
  oddList: number[] = [];
  counter: number = 0;


  onGameStarted(v: number) {
    this.counter++;
    //console.log(this.counter);

    (this.counter % 2) === 0 ? this.evenList.push(this.counter) : this.oddList.push(this.counter);

  }
}
