import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoprojectsComponent } from './noprojects.component';

describe('NoprojectsComponent', () => {
  let component: NoprojectsComponent;
  let fixture: ComponentFixture<NoprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoprojectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
