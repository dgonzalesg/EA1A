import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectnewComponent } from './projectnew.component';

describe('ProjectnewComponent', () => {
  let component: ProjectnewComponent;
  let fixture: ComponentFixture<ProjectnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
