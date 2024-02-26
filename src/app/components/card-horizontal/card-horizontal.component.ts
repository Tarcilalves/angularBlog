import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-horizontal',
  templateUrl: './card-horizontal.component.html',
  styleUrls: ['./card-horizontal.component.css']
})
export class CardHorizontalComponent implements OnInit {
  //Criar as propriedades do elementos que serão dinâmicos
  @Input()
  photoCover:string="";
  @Input()
  cardTitle:string="";
  @Input()
  cardDescription:string="";
  @Input()
  cardLink:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
