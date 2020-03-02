import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HundredPercentComponent } from './hundred-percent.component';

describe('HundredPercentComponent', () => {
  let component: HundredPercentComponent;
  let fixture: ComponentFixture<HundredPercentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HundredPercentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HundredPercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
