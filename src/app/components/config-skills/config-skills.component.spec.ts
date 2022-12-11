import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSkillsComponent } from './config-skills.component';

describe('ConfigSkillsComponent', () => {
  let component: ConfigSkillsComponent;
  let fixture: ComponentFixture<ConfigSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
