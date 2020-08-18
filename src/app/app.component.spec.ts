import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TabledataComponent } from './tabledata/tabledata.component';
import { DebugElement } from '@angular/core';
import { LinechartComponent } from './linechart/linechart.component';
import { By } from '@angular/platform-browser';
import { NewsService } from './news.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {

  let appComponent: AppComponent
  let tabledataComponent :TabledataComponent
  let linechartComponent: LinechartComponent

  let appfixture: ComponentFixture<AppComponent>
  let tablefixture : ComponentFixture<TabledataComponent>
  let linechartfixture : ComponentFixture<LinechartComponent>

  let appDebugEl:DebugElement
  let tableDebugEl:DebugElement
  let linechartDebugEl:DebugElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[NewsService],
      imports:[HttpClientTestingModule] 
    })
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule ],
      declarations: [ AppComponent, TabledataComponent],
    }).compileComponents();
  }));

  beforeEach(() =>{
    appfixture= TestBed.createComponent(AppComponent)
    appComponent=appfixture.componentInstance
    appDebugEl=appfixture.debugElement
    appComponent.inputvariable=[10,20]
    appComponent.inputvariable1=[10,20]
    appfixture.detectChanges()

    tablefixture=TestBed.createComponent(TabledataComponent)
    tabledataComponent=tablefixture.componentInstance
    tableDebugEl=tablefixture.debugElement
    tablefixture.detectChanges()
  
    linechartfixture=TestBed.createComponent(LinechartComponent)
    linechartComponent=linechartfixture.componentInstance
    linechartDebugEl=linechartfixture.debugElement
    linechartfixture.detectChanges()

  })

  // fit('should test the input changes',async(()=>{
  //    let h1= appDebugEl.query(By.css('#abc')).nativeElement.innerText;
  //    expect(h1).toContain('10')
  //    }))

  //  fit('should test the output changes',async(()=>{
  //    let a=[10,20]
  //    TabledataComponent.myoutput.
  //    let h1= appDebugEl.query(By.css('#abc')).nativeElement.innerText;
  //    expect(h1).toContain('10')
  //    }))

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

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('hackernews app is running!');
  // });
});
