import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'hackernews';
  inputvariable=[];

  getdata(value:any){
    console.log(value)
    this.inputvariable=value
    console.log("+++++++++++++++++++++")
  }
}
