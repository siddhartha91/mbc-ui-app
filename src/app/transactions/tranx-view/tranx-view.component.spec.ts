import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranxViewComponent } from './tranx-view.component';

describe('TranxViewComponent', () => {
  let component: TranxViewComponent;
  let fixture: ComponentFixture<TranxViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranxViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
