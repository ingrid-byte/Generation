import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentIdComponent } from './comment-id.component';

describe('CommentIdComponent', () => {
  let component: CommentIdComponent;
  let fixture: ComponentFixture<CommentIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
