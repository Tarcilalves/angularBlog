import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-destaque',
  templateUrl: './card-destaque.component.html',
  styleUrls: ['./card-destaque.component.css']
})
export class CardDestaqueComponent implements OnInit {

  @Input()
  photoCover:string="";
  @Input()
  cardTitle:string="";
  @Input()
  cardDescription:string="";
  @Input()
  cardDescriptionLink:string="";
  @Input()
  cardLink:string="";
  @Input()
  cardSourceContent:string="";
  @Input()
  Id:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
