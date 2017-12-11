import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShoplistComponent } from './new-shoplist.component';

describe('NewShoplistComponent', () => {
  let component: NewShoplistComponent;
  let fixture: ComponentFixture<NewShoplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewShoplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShoplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
