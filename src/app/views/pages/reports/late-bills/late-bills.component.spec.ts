import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateBillsComponent } from './late-bills.component';

describe('LateBillsComponent', () => {
  let component: LateBillsComponent;
  let fixture: ComponentFixture<LateBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateBillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LateBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
