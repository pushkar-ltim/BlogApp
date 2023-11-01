import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAppComponent } from './blog-app.component';

describe('BlogAppComponent', () => {
  let component: BlogAppComponent;
  let fixture: ComponentFixture<BlogAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogAppComponent]
    });
    fixture = TestBed.createComponent(BlogAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
