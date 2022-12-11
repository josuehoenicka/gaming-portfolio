import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSocialComponent } from './config-social.component';

describe('ConfigSocialComponent', () => {
  let component: ConfigSocialComponent;
  let fixture: ComponentFixture<ConfigSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
