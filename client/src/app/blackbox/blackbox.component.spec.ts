import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackboxComponent } from './blackbox.component';

describe('BlackboxComponent', () => {
  let component: BlackboxComponent;
  let fixture: ComponentFixture<BlackboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
