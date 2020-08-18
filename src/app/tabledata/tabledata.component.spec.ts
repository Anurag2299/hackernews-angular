import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TabledataComponent } from './tabledata.component';
import { NewsService } from '../news.service';
import { HttpClientTestingModule,HttpTestingController} from "@angular/common/http/testing";
// import { By } from '@angular/platform-browser';

describe('TabledataComponent', () => {
  let component: TabledataComponent;
  let fixture: ComponentFixture<TabledataComponent>;
  let service:NewsService;
  let httpTestCtrl : HttpTestingController

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabledataComponent],
      providers:[NewsService],
      imports:[HttpClientTestingModule] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabledataComponent);
    component = fixture.componentInstance;
    // service = TestBed.get(NewsService);
    fixture.detectChanges();
    
  });

  beforeEach(() => {
    httpTestCtrl = TestBed.get(HttpTestingController)
    service = TestBed.get(NewsService);
  });

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

  // it('bookmark button clicked when toggle is false',fakeAsync(()=>{
  //   spyOn(component, 'bookmark').and.callThrough();
  //   component.toggle=false;
  //   let button = fixture.debugElement.nativeElement.querySelector('.bookmark');
  //   button.click();
  //   tick();
  //   expect(component.bookmark).toHaveBeenCalled();
  // }))
  // it('upvote button clicked###################',fakeAsync(()=>{
  //     //   let temp=575
  //   const testPost:any = 
  //       {
  //       author: "hirundo",
  //       comment_text: null,
  //       created_at: "2020-08-16T02:14:30.000Z",
  //       created_at_i: 1597544070,
  //       num_comments: 255,
  //       objectID: "24174276",
  //       parent_id: null,
  //       points: 575,
  //       story_id: null,
  //       story_text: null,
  //       story_title: null,
  //       story_url: null,
  //       title: "Amazon Liable for Defective Third-Party Products Rules CA Appellate Court",
  //       url: "https://californiaglobe.com/section-2/amazon-liable-for-defective-third-party-products-rules-ca-appelate-court/",
  //       _highlightResult: {title: {}, url: {}, author: {}},
  //       _tags: ["story", "author_hirundo", "story_24174276", "front_page"],
  //       }
  //   spyOn(component, 'increment').and.callThrough()
  //   component.dataSource=testPost;
  //   let button = fixture.debugElement.nativeElement.querySelector('.testing');
  //   // let button = fixture.debugElement.query(By.css('.testing')).nativeElement;
  //   button.click();
  //   service.getNews(0).subscribe((posts) =>{
  //     expect(testPost).toBe(posts);
  //   })

  //   const req = httpTestCtrl.match('https://hn.algolia.com/api/v1/search?query=front_page&hitsPerPage=10&page=0')
  //   // req.flush(testPost)
  //   httpTestCtrl.verify()
  //   component.dataSource=testPost
  //   tick();
  //   expect(component.voteChange(0)).toHaveBeenCalled();
  // }))

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

  // it('update function',fakeAsync(()=>{
  //   spyOn(component, 'updateData').and.callThrough()
  //   // component.p=0;
  //   // let button = fixture.debugElement.nativeElement.querySelector('.testing1');
  //   // button.click();
  //   tick();
  //   expect(component.updateData).toHaveBeenCalled();
  // }))
 

  // fit("temp",()=>{
  //   let temp=575
  //   const testPost:any = 
  //       {
  //       author: "hirundo",
  //       comment_text: null,
  //       created_at: "2020-08-16T02:14:30.000Z",
  //       created_at_i: 1597544070,
  //       num_comments: 255,
  //       objectID: "24174276",
  //       parent_id: null,
  //       points: 575,
  //       story_id: null,
  //       story_text: null,
  //       story_title: null,
  //       story_url: null,
  //       title: "Amazon Liable for Defective Third-Party Products Rules CA Appellate Court",
  //       url: "https://californiaglobe.com/section-2/amazon-liable-for-defective-third-party-products-rules-ca-appelate-court/",
  //       _highlightResult: {title: {}, url: {}, author: {}},
  //       _tags: ["story", "author_hirundo", "story_24174276", "front_page"],
  //       }
  //   localStorage.setItem('sessionData', JSON.stringify(testPost));
  //   let dataSource=JSON.parse(localStorage.getItem('sessionData'))
  //   console.log(dataSource)
  //   // expect(temp).toBe(testPost.points);
  //   component = fixture.componentInstance;
  //   // service = TestBed.get(NewsService);
  //   fixture.detectChanges();
  // })

  it("update function",() =>{
      
            let posts:any=[{
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
            }]
            component.dataSource=posts
            component.updateData()
      expect(component.updateData).toBeTruthy()
  })


  it("filter function",() =>{
      
    let posts:any=[{
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
    }]
    component.dataSource=posts
    component.filterNews(123)
expect(component.filterNews).toBeTruthy()
})

it("upvote function",() =>{
      
  let posts:any=[{
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
  }]
  component.dataSource=posts
  component.voteChange(0)
expect(component.voteChange).toBeTruthy()
})
  // it('output&&&&&&&&&&&&&&&&&&', () => {
  //     let temp=[575]
  //     const testPost:any = 
  //     {
  //     author: "hirundo",
  //     comment_text: null,
  //     created_at: "2020-08-16T02:14:30.000Z",
  //     created_at_i: 1597544070,
  //     num_comments: 255,
  //     objectID: "24174276",
  //     parent_id: null,
  //     points: 575,
  //     story_id: null,
  //     story_text: null,
  //     story_title: null,
  //     story_url: null,
  //     title: "Amazon Liable for Defective Third-Party Products Rules CA Appellate Court",
  //     url: "https://californiaglobe.com/section-2/amazon-liable-for-defective-third-party-products-rules-ca-appelate-court/",
  //     _highlightResult: {title: {}, url: {}, author: {}},
  //     _tags: ["story", "author_hirundo", "story_24174276", "front_page"],
  //     }
  
  //     service.getNews().subscribe((posts) =>{
  //       expect(temp).toBe(testPost.points);
  //     })
  
  //     const req = httpTestCtrl.match('https://hn.algolia.com/api/v1/search?tags=front_page')
  //     // expect(req.cancelled).toBeFalsy();
  //     // expect(req.request.responseType).toEqual('json');
  //     // req.flush(testPost)
  //     httpTestCtrl.verify()

  // });



  it('service testing', () => {
    spyOn(service, 'getNews').and.callThrough();
    // expect(component).toBeTruthy();
    expect(service.getNews).toBeTruthy();
  });
});
