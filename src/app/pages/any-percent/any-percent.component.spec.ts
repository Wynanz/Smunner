import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyPercentComponent } from './any-percent.component';

describe('AnyPercentComponent', () => {
  let component: AnyPercentComponent;
  let fixture: ComponentFixture<AnyPercentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnyPercentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyPercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
