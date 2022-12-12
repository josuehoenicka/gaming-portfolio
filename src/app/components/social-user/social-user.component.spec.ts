import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialUserComponent } from './social-user.component';

describe('SocialUserComponent', () => {
  let component: SocialUserComponent;
  let fixture: ComponentFixture<SocialUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
