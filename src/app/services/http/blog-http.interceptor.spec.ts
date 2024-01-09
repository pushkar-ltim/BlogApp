import { TestBed } from '@angular/core/testing';

import { BlogHttpInterceptor } from './blog-http.interceptor';

describe('BlogHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BlogHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BlogHttpInterceptor = TestBed.inject(BlogHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
