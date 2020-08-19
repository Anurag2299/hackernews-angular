import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TabledataComponent } from './tabledata.component';
import { NewsService } from '../news.service';
import { HttpClientTestingModule,HttpTestingController} from "@angular/common/http/testing";
import { of } from 'rxjs';
// import { By } from '@angular/platform-browser';
import { TruncateModule } from 'ng2-truncate';

const testPost =  [
  {
  author: "hirundo",
  comment_text: null,
  created_at: "2020-08-16T02:14:30.000Z",
  created_at_i: 1597544070,
  num_comments: 255,
  objectID: "24174276",
  parent_id: null,
  points: 575,
  story_id: null,
  story_text: null,
  story_title: null,
  story_url: null,
  title: "Amazon Liable for Defective Third-Party Products Rules CA Appellate Court",
  url: "https://californiaglobe.com/section-2/amazon-liable-for-defective-third-party-products-rules-ca-appelate-court/",
  _highlightResult: {title: {}, url: {}, author: {}},
  _tags: ["story", "author_hirundo", "story_24174276", "front_page"],
  }
      ,
{
  author: "hirundo",
  comment_text: null,
  created_at: "2020-08-16T02:14:30.000Z",
  created_at_i: 1597544070,
  num_comments: 255,
  objectID: "24174274",
  parent_id: null,
  points: 575,
  story_id: null,
  story_text: null,
  story_title: null,
  story_url: null,
  title: "Amazon Liable for Defective Third-Party Products Rules CA Appellate Court",
  url: "https://californiaglobe.com/section-2/amazon-liable-for-defective-third-party-products-rules-ca-appelate-court/",
  _highlightResult: {title: {}, url: {}, author: {}},
  _tags: ["story", "author_hirundo", "story_24174276", "front_page"],
  }
]

describe('TabledataComponent', () => {
  let component: TabledataComponent;
  let fixture: ComponentFixture<TabledataComponent>;
  let service:NewsService;
  let httpTestCtrl : HttpTestingController

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabledataComponent],
      providers:[NewsService],
      imports:[HttpClientTestingModule,TruncateModule] 
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(TabledataComponent);
    component = fixture.componentInstance;
    component.dataSource=testPost;
    service = TestBed.get(NewsService);
    httpTestCtrl = TestBed.get(HttpTestingController)
    fixture.detectChanges();
    
  });

   // imp **********************************
  it('Testing subscribe method is being called',fakeAsync(()=>{
    let dataspy = spyOn(service,'getNews').and.returnValue(of(testPost));
    let subspy = spyOn(service.getNews(0),'subscribe');
    component.p=0; 
    let button = fixture.debugElement.nativeElement.querySelector('.testing');
    button.click();
    tick();
    expect(dataspy).toHaveBeenCalledBefore(subspy);
    expect(subspy).toHaveBeenCalled()
    // expect(component.dataSource.length).toBeGreaterThan(-1)
    // expect(component.increment).toHaveBeenCalled();
  }))

  it('bookmark button clicked',fakeAsync(()=>{
    spyOn(component, 'bookmark').and.callThrough();
    component.toggle=false;
    component.p=1
    component.bookmarkpage=1
    let button = fixture.debugElement.nativeElement.querySelector('.bookmark');
    button.click();
    tick();
    expect(component.bookmark).toHaveBeenCalled();
  }))

  it('bookmark button clicked when toggle is false',fakeAsync(()=>{
    spyOn(component, 'bookmark').and.callThrough();
    component.toggle=false;
    let button = fixture.debugElement.nativeElement.querySelector('.bookmark');
    button.click();
    tick();
    expect(component.bookmark).toHaveBeenCalled();
  }))

  it('upvote button clicked',fakeAsync(()=>{
     let button = fixture.debugElement.nativeElement.querySelector('.down');
    
    button.click();
    tick();
    expect(component.dataSource[0].points).toBe(576)
  }))

  it('Next button clicked',fakeAsync(()=>{
    spyOn(component, 'increment').and.callThrough()
    component.p=0;
    let button = fixture.debugElement.nativeElement.querySelector('.testing');
    button.click();
    tick();
    expect(component.increment).toHaveBeenCalled();
  }))

  it('Previous button clicked when current page is not first page',fakeAsync(()=>{
    spyOn(component, 'decrement').and.callThrough()
    component.p=1;
    let button = fixture.debugElement.nativeElement.querySelector('.testing1');
    button.click();
    tick();
    expect(component.decrement).toHaveBeenCalled();
  }))

  it('Previous button clicked when current page is first page',fakeAsync(()=>{
    spyOn(component, 'decrement').and.callThrough()
    component.p=0;
    let button = fixture.debugElement.nativeElement.querySelector('.testing1');
    button.click();
    tick();
    expect(component.decrement).toHaveBeenCalled();
  }))

  it("hide button is clicked",() =>{  
 let dataleft =[
  {
    author: "hirundo",
    comment_text: null,
    created_at: "2020-08-16T02:14:30.000Z",
    created_at_i: 1597544070,
    num_comments: 255,
    objectID: "24174274",
    parent_id: null,
    points: 575,
    story_id: null,
    story_text: null,
    story_title: null,
    story_url: null,
    title: "Amazon Liable for Defective Third-Party Products Rules CA Appellate Court",
    url: "https://californiaglobe.com/section-2/amazon-liable-for-defective-third-party-products-rules-ca-appelate-court/",
    _highlightResult: {title: {}, url: {}, author: {}},
    _tags: ["story", "author_hirundo", "story_24174276", "front_page"],
    }
]
let button = fixture.debugElement.nativeElement.querySelector('.testing2');
button.click();
expect(component.dataSource).toEqual(dataleft)
})


});
