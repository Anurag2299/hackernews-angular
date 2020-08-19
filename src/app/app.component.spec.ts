import { TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NewsService } from './news.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TruncateModule } from 'ng2-truncate';

describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[NewsService],
      imports:[HttpClientTestingModule] 
    })
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hackernews'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('hackernews');
  });

  it('should assign the vote',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.getdata([10,20])
    expect(app.inputvariable).toContain(10);
  })

  it('should assign the id',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.getdata1([10,20])
    expect(app.inputvariable1).toContain(10);
  })

});
