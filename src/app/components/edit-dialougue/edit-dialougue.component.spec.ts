import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDialougueComponent } from './edit-dialougue.component';

describe('EditDialougueComponent', () => {
  let component: EditDialougueComponent;
  let fixture: ComponentFixture<EditDialougueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDialougueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDialougueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
