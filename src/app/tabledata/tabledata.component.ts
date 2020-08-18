import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css'],
})
export class TabledataComponent implements OnInit {
  dataSource: any=[];
  dataSource1: any=[];
  p: number = 0;
  temp: number = 0;
  bookmarkpage:number=0;
  toggle:boolean= false;
  dateValue = Date.now();
  datediff=[];
  days=1000*60*60*24*364;

  displayedColumns = ['num_comments', 'points', 'author', 'title'];
  @Output() myoutput: EventEmitter<any> = new EventEmitter();
  @Output() myoutput1:EventEmitter<any>= new EventEmitter();
  outputstring = 'Hi i am your child';
  constructor(public newsService: NewsService) {
  }
  ngOnInit() {
 if(sessionStorage.length> 0){
    this.dataSource=JSON.parse(sessionStorage.getItem('sessionData'))
    this.p=JSON.parse(sessionStorage.getItem('pageNumber'))
    this.bookmarkpage=JSON.parse(localStorage.getItem('bookpage'))
    this.updateData();
 }   
else
 { 
  this.bookmarkpage=JSON.parse(localStorage.getItem('bookpage'))
   this.p=this.bookmarkpage 
    this.newsService.getNews(this.p).subscribe((results) => {
      if (!results) {
        return;
      }
      this.dataSource1 = results;
      this.dataSource = this.dataSource1.hits;
      this.updateData();
      
    });}
  }

  votes = [];
  comment_count = [];
  id = [];
  dataSource2 = [];
  voteChange(value: number) {
    // value = (this.p - 1) * 5 + value;
    this.dataSource[value].points++;
    this.updateData();
  }

  bookmark(){
    this.toggle=!this.toggle
    if(this.p==this.bookmarkpage){
      this.toggle=false
      this.bookmarkpage=0
      localStorage.setItem('bookpage', JSON.stringify(this.bookmarkpage));
    }
    if(this.toggle){
       this.bookmarkpage=this.p
       localStorage.setItem('bookpage', JSON.stringify(this.bookmarkpage));
    }
    // console.log(this.bookmarkpage)
    }

    buttonBookmark(){
      this.toggle=false
        if(this.p==this.bookmarkpage){
          this.toggle=true
        }
   
  }

  increment(){
    this.p++
    this.newsService.getNews(this.p).subscribe((results) => {
      if (!results) {
        return;
      }
      this.dataSource1 = results;
      this.dataSource = this.dataSource1.hits;
      this.buttonBookmark();
      this.updateData();
    });
  }

  decrement()
  {
    if(this.p!==0)
    {
      this.p--
      this.newsService.getNews(this.p).subscribe((results) => {
        if (!results) {
          return;
        }
        this.dataSource1 = results;
        this.dataSource = this.dataSource1.hits;
        this.buttonBookmark();
          this.updateData();
      });
    
    }
    else{
      alert("you are in 1st page")
    }
    
  }

  filterNews(value: number) {
    this.dataSource2 = this.dataSource.filter((item) => {
      if (item.objectID != value) {
        return item;
      }
    });
    this.dataSource = this.dataSource2;
    this.updateData();
  }

  updateData() {
    this.votes = [];
    // this.comment_count = [];
    this.id = [];
    for (let i = 0; i < this.dataSource.length; i++) {
      this.votes.push(this.dataSource[i].points);
      // this.comment_count.push(this.dataSource[i].num_comments);
      this.id.push(this.dataSource[i].objectID);
      this.datediff.push(Math.floor((this.dateValue - this.dataSource[i].created_at_i)/this.days) )
    }
    this.myoutput.emit(this.votes);
    this.myoutput1.emit(this.id)
    sessionStorage.setItem('sessionData', JSON.stringify(this.dataSource));
    sessionStorage.setItem('pageNumber', JSON.stringify(this.p));
    this.buttonBookmark();
  }

}
