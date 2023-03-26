import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseStoryFormComponent } from './use-story-form.component';

describe('UseStoryFormComponent', () => {
  let component: UseStoryFormComponent;
  let fixture: ComponentFixture<UseStoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseStoryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseStoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
