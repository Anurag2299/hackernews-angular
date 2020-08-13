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
export class TabledataComponent implements OnInit, OnChanges {
  dataSource: any;
  dataSource1: any;
  p: number = 1;
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
    this.newsService.getNews().subscribe((results) => {
      if (!results) {
        return;
      }
      this.dataSource1 = results;
      this.dataSource = this.dataSource1.hits;
      console.log('@#$%^');
      console.log(this.dataSource);
      this.update();
      // console.log(this.p)
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.update();
  }

  votes = [];
  comment_count = [];
  id = [];

  voteChange(value:number) {
    value = (this.p - 1) * 5 + value;
    console.log(value);
    console.log(this.p);
    console.log('~~~~~~~~~~~~~~~***********************');
    this.dataSource[value].points++;
    console.log(this.dataSource[value].points);
    this.update();
  }

  update() {
    console.log('abc');
    this.votes = [];
    this.comment_count = [];
    this.id = [];
    for (let i = 0; i < this.dataSource.length; i++) {
      this.votes.push(this.dataSource[i].points);
      this.comment_count.push(this.dataSource[i].num_comments);
      this.id.push(this.dataSource[i].objectID);
    }
    this.myoutput.emit(this.votes);
    this.xyz();
    // console.log(this.comment_count);
  }

  xyz() {
    this.newsService.votes.next(this.votes);
    // console.log(this.newsService.votes)
    // console.log("*************************************************************")
    this.newsService.comment_count.next(this.comment_count);
    this.newsService.id.next(this.id);
  }
}
