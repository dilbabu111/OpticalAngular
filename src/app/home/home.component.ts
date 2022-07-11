import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickcounter: number = 0;

  product: string = 'Default';

  constructor() { }

  ngOnInit(): void {
  }

  CountClick(){
    this.clickcounter +=1;
  }

  getClasses()
  {
    let myClasses = {
      success: this.clickcounter > 3,
      failure: this.clickcounter <= 3
    }
    return myClasses;
  }
}
