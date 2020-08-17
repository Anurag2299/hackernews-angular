import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinechartComponent } from './linechart.component';

describe('LinechartComponent', () => {
  let component: LinechartComponent;
  let fixture: ComponentFixture<LinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinechartComponent);
    component = fixture.componentInstance;
   
  });

  // it('input case for myinput', () => {
  //   component.myinput=[10,20]
  //   fixture.detectChanges();
  //   expect(fixture.nativeElement.querySelector('h1').textContent).toBe(' 10,20');
  // });

  // it('input case myinput1 ', () => {
  //   component.myinput1=[10,20]
  //   fixture.detectChanges();
  //   expect(fixture.nativeElement.querySelector('h1').textContent).toBe(' ');
  // });
});
