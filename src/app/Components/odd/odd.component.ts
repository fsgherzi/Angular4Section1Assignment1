import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  name: string = 'Odd';

  @Input('oddElement') element: {
    odd: number
  };

  constructor() {

  }

  ngOnInit() {
  }

}
