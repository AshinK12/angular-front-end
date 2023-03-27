import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponents } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponents;
  let fixture: ComponentFixture<SignupComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
