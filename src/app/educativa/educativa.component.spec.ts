import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducativaComponent } from './educativa.component';

describe('EducativaComponent', () => {
  let component: EducativaComponent;
  let fixture: ComponentFixture<EducativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
