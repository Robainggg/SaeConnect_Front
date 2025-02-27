import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudDashboardComponent } from './etud-dashboard.component';

describe('EtudDashboardComponent', () => {
  let component: EtudDashboardComponent;
  let fixture: ComponentFixture<EtudDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtudDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
