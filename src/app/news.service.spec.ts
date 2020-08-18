import { TestBed ,async} from '@angular/core/testing';
import { NewsService } from './news.service';
import { HttpClientTestingModule,HttpTestingController} from "@angular/common/http/testing";
import { HttpClient } from '@angular/common/http';


describe('NewsService', () => {
  let service: NewsService;
  let httpTestCtrl : HttpTestingController
  let httpClient :HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[NewsService],
      imports:[HttpClientTestingModule] 
    })
  });

  beforeEach(() => {
    httpTestCtrl = TestBed.get(HttpTestingController)
    service = TestBed.get(NewsService);
  });


  it('test the http get method', () => {
    const testPost:any = 
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

    service.getNews(0).subscribe((posts) =>{
      expect(testPost).toBe(posts);
    })

    const req = httpTestCtrl.expectOne('https://hn.algolia.com/api/v1/search?query=front_page&hitsPerPage=10&page=0')
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(testPost)
    httpTestCtrl.verify()
  });
 
  it('test the http get method with null value', () => {
    const testPost:any = 
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

    service.getNews(null).subscribe((posts) =>{
      expect(testPost).toBe(posts);
    })

    // const req = httpTestCtrl.expectOne('https://hn.algolia.com/api/v1/search?query=front_page&hitsPerPage=10&page=0')
    // expect(req.cancelled).toBeFalsy();
    // expect(req.request.responseType).toEqual('json');
    // req.flush(testPost)
    // httpTestCtrl.verify()
  });

});
