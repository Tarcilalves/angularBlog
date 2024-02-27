import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-vertical',
  templateUrl: './card-vertical.component.html',
  styleUrls: ['./card-vertical.component.css']
})
export class CardVerticalComponent implements OnInit {

  @Input()
  photoCover:string="";
  @Input()
  cardTitle:string="";
  @Input()
  cardDescription:string="";
  @Input()
  cardLink:string="";


  constructor() { }

  ngOnInit(): void {
  }

}
