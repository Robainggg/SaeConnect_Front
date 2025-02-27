import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerSaeComponent } from './creer-sae.component';

describe('CreerSaeComponent', () => {
  let component: CreerSaeComponent;
  let fixture: ComponentFixture<CreerSaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreerSaeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerSaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
