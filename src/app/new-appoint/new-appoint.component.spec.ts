import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppointComponent } from './new-appoint.component';

describe('NewAppointComponent', () => {
  let component: NewAppointComponent;
  let fixture: ComponentFixture<NewAppointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAppointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAppointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
