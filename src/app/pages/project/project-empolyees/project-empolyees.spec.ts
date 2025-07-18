import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEmpolyees } from './project-empolyees';

describe('ProjectEmpolyees', () => {
  let component: ProjectEmpolyees;
  let fixture: ComponentFixture<ProjectEmpolyees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectEmpolyees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectEmpolyees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
