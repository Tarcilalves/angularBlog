import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-sections',
  templateUrl: './card-sections.component.html',
  styleUrls: ['./card-sections.component.css']
})
export class CardSectionsComponent implements OnInit {

  @Input()
  photoCover:string="";
  @Input()
  cardTitle:string=""; 
  @Input()
  cardLink:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
