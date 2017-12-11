import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortionComponent } from './portion.component';

describe('PortionComponent', () => {
  let component: PortionComponent;
  let fixture: ComponentFixture<PortionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
