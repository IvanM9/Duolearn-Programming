import { TestBed } from '@angular/core/testing';

import { LoginResolver } from './login.resolver';

describe('LoginResolver', () => {
  let resolver: LoginResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LoginResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
