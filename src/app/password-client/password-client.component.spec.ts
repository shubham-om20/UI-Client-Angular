import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordClientComponent } from './password-client.component';

describe('PasswordClientComponent', () => {
  let component: PasswordClientComponent;
  let fixture: ComponentFixture<PasswordClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
