import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Input()
  Id:string | undefined;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.Id = params['id'];
    });
    
  }

  ngOnInit(): void {
  }

}
