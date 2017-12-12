import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCreatorComponent } from './house-creator.component';

describe('HouseCreatorComponent', () => {
  let component: HouseCreatorComponent;
  let fixture: ComponentFixture<HouseCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
