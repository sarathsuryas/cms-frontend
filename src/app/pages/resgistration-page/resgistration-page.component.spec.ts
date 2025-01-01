import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistrationPageComponent } from './resgistration-page.component';

describe('ResgistrationPageComponent', () => {
  let component: ResgistrationPageComponent;
  let fixture: ComponentFixture<ResgistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResgistrationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResgistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
