import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsCardComponent } from './pics-card.component';

describe('PicsCardComponent', () => {
  let component: PicsCardComponent;
  let fixture: ComponentFixture<PicsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
