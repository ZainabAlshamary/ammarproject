import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelBillsComponent } from './cancel-bills.component';

describe('CancelBillsComponent', () => {
  let component: CancelBillsComponent;
  let fixture: ComponentFixture<CancelBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelBillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
