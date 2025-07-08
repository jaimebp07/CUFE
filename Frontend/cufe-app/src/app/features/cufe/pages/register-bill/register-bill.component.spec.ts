import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBillComponent } from './register-bill.component';

describe('RegisterBillComponent', () => {
  let component: RegisterBillComponent;
  let fixture: ComponentFixture<RegisterBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterBillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
