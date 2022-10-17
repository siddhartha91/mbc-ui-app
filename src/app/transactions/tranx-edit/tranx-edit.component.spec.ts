import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranxEditComponent } from './tranx-edit.component';

describe('TranxEditComponent', () => {
  let component: TranxEditComponent;
  let fixture: ComponentFixture<TranxEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranxEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranxEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
