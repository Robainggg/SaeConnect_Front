import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaeDashboardComponent } from './sae-dashboard.component';

describe('SaeDashboardComponent', () => {
  let component: SaeDashboardComponent;
  let fixture: ComponentFixture<SaeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaeDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
