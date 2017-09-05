import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('startGame') startNewGame = new EventEmitter<number>();

  counter: number = 0;
  ref;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.ref = setInterval(this.emitEvent.bind(this), 1000);
  }

  emitEvent() {
    this.startNewGame.emit(this.counter);
  }

  stopGame() {
    clearInterval(this.ref);
  }

}
