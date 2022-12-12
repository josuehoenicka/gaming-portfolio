import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsUserComponent } from './projects-user.component';

describe('ProjectsUserComponent', () => {
  let component: ProjectsUserComponent;
  let fixture: ComponentFixture<ProjectsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
