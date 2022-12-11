import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigProjectsComponent } from './config-projects.component';

describe('ConfigProjectsComponent', () => {
  let component: ConfigProjectsComponent;
  let fixture: ComponentFixture<ConfigProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
