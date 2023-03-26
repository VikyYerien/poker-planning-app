import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() 'turned':boolean;
  @Input() 'score':string; 
  @Input() 'animated': boolean;

  ngOnInit(): void {}

}
