import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'hackernews';

  inputvariable=[];
  inputvariable1=[];

  getdata(value:any){
    this.inputvariable=value
  }

  getdata1(value:any){
    this.inputvariable1=value
  }
}
