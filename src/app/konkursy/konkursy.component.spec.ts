import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonkursyComponent } from './konkursy.component';

describe('KonkursyComponent', () => {
  let component: KonkursyComponent;
  let fixture: ComponentFixture<KonkursyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonkursyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonkursyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
