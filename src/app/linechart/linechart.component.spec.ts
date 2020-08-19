import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinechartComponent } from './linechart.component';
import { SimpleChange } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';

describe('LinechartComponent', () => {
  let component: LinechartComponent;
  let fixture: ComponentFixture<LinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinechartComponent ],
      imports: [HighchartsChartModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinechartComponent);
    component = fixture.componentInstance;
   
  });

  it('checks the ngOnChange hook ', () => {
    component.myinput=[10,20]
    component.ngOnChanges({
    myinput: new SimpleChange(null, component.myinput, true)
  });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
