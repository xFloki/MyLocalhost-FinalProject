import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseInvitationsComponent } from './house-invitations.component';

describe('HouseInvitationsComponent', () => {
  let component: HouseInvitationsComponent;
  let fixture: ComponentFixture<HouseInvitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseInvitationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseInvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
