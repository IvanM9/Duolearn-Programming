import { TestBed } from '@angular/core/testing';

import { PreloaderResolver } from './preloader.resolver';

describe('PreloaderResolver', () => {
  let resolver: PreloaderResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PreloaderResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
