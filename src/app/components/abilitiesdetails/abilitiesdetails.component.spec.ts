import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesdetailsComponent } from './abilitiesdetails.component';

describe('AbilitiesdetailsComponent', () => {
  let component: AbilitiesdetailsComponent;
  let fixture: ComponentFixture<AbilitiesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbilitiesdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbilitiesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
