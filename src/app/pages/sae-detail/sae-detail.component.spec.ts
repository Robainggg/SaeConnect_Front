import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaeDetailComponent } from './sae-detail.component';

describe('SaeDetailComponent', () => {
  let component: SaeDetailComponent;
  let fixture: ComponentFixture<SaeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaeDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
