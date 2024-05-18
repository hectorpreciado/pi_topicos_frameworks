import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovedetailsComponent } from './movedetails.component';

describe('MovedetailsComponent', () => {
  let component: MovedetailsComponent;
  let fixture: ComponentFixture<MovedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovedetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
