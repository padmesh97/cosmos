import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInstaCardComponent } from './post-insta-card.component';

describe('PostInstaCardComponent', () => {
  let component: PostInstaCardComponent;
  let fixture: ComponentFixture<PostInstaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostInstaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInstaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
