import { TestBed } from '@angular/core/testing';

import { ResetResolver } from './reset.resolver';

describe('ResetResolver', () => {
  let resolver: ResetResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ResetResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
