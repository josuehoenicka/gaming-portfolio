import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroUserComponent } from './hero-user.component';

describe('HeroUserComponent', () => {
  let component: HeroUserComponent;
  let fixture: ComponentFixture<HeroUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
