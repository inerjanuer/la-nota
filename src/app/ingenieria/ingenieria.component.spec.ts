import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenieriaComponent } from './ingenieria.component';

describe('IngenieriaComponent', () => {
  let component: IngenieriaComponent;
  let fixture: ComponentFixture<IngenieriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngenieriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenieriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
