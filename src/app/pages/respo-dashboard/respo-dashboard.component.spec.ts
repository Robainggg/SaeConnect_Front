import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespoDashboardComponent } from './respo-dashboard.component';

describe('RespoDashboardComponent', () => {
  let component: RespoDashboardComponent;
  let fixture: ComponentFixture<RespoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespoDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
