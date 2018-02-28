import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  value: number;

  constructor() { 
    this.value = 1;
  }

  increase() {
    this.value = this.value + 1;
    return false;
  }

  decrease() {
    this.value = this.value - 1;
    return false;
  }

  ngOnInit() {
  }

}
