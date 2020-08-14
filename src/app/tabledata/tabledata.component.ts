import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css'],
})
export class TabledataComponent implements OnInit {
  dataSource: any;
  dataSource1: any;
  p: number = 1;
  temp: number = 0;
  dateValue = Date.now();
  datediff=[];
  days=1000*60*60*24*364;

  displayedColumns = ['num_comments', 'points', 'author', 'title'];
  @Output() myoutput: EventEmitter<any> = new EventEmitter();
  outputstring = 'Hi i am your child';
  constructor(private newsService: NewsService) {
    this.newsService.votes.subscribe((num) => {
      this.votes = num;
      // let www= num
      // console.log(www)
    });
    this.newsService.comment_count.subscribe((num1) => {
      this.comment_count = num1;
      // console.log(num1)
      // console.log("%%%%%%%%%%%%%%%%%%%%%")
    });
    this.newsService.id.subscribe((num1) => {
      this.id = num1;
      // console.log(num1)
      // console.log("%%%%%%%%%%%%%%%%%%%%%")
    });
  }

  // sendData(){
  //   this.myoutput.emit(this.outputstring);
  // }
  ngOnInit() {
 if(sessionStorage.length> 0){
    this.dataSource=JSON.parse(sessionStorage.getItem('sessionData'))
    this.updateData();
    // console.log('@#$%^');
    // console.log(this.dataSource);
 }   
else
 {   this.newsService.getNews().subscribe((results) => {
      if (!results) {
        return;
      }
      this.dataSource1 = results;
      this.dataSource = this.dataSource1.hits;
      console.log('@#$%^');
      console.log(this.dataSource);
      this.updateData();
      // console.log(this.p)
    });}
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   // this.updateData();
  // }

  votes = [];
  comment_count = [];
  id = [];
  dataSource2 = [];
  voteChange(value: number) {
    value = (this.p - 1) * 5 + value;
    // console.log(value);
    // console.log(this.p);
    // console.log('~~~~~~~~~~~~~~~***********************');

    this.dataSource[value].points++;
    // console.log(this.dataSource[value].points);

    this.updateData();
  }

  filterNews(value: number) {
    this.dataSource2 = this.dataSource.filter((item) => {
      if (item.objectID != value) {
        return item;
      }
      // console.log(item.objectID)
      // console.log('~~~~~~~~~~~~~~~***********************');
    });
    this.dataSource = this.dataSource2;
    // console.log(this.dataSource);

    this.updateData();
  }

  updateData() {
    // console.log('abc');
    this.votes = [];
    this.comment_count = [];
    this.id = [];
    for (let i = 0; i < this.dataSource.length; i++) {
      this.votes.push(this.dataSource[i].points);
      this.comment_count.push(this.dataSource[i].num_comments);
      this.id.push(this.dataSource[i].objectID);
      this.datediff.push(Math.floor((this.dateValue - this.dataSource[i].created_at_i)/this.days) )
      // console.log(this.dateValue)
      // console.log("$$$$$$$$$$$$$$$$$$$$$$$$")
    }
    this.myoutput.emit(this.votes);
    this.updateService();
    // console.log(this.comment_count);
  }

  updateService() {
    this.newsService.votes.next(this.votes);
    // console.log(this.newsService.votes)
    // console.log("*************************************************************")
    this.newsService.comment_count.next(this.comment_count);
    this.newsService.id.next(this.id);
    sessionStorage.setItem('sessionData', JSON.stringify(this.dataSource));
    // console.log(JSON.parse(sessionStorage.getItem('sessionData')));
    // console.log('%%%%%%%%%%%%%%%%%%%%%');
  }
}
