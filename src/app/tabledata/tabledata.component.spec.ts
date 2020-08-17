import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabledataComponent } from './tabledata.component';
import { NewsService } from '../news.service';
import { HttpClientTestingModule,HttpTestingController} from "@angular/common/http/testing";

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

  // it("update function",() =>{
  //     component.updateData()
  //     expect
  // })

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
