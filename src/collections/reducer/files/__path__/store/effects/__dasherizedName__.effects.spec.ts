import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';

// rxjs
import { Observable } from 'rxjs';

import { <%= classifiedName %>Effects } from './<%= dasherizedName %>.effects';

describe('<%= classifiedName %>Effects', () => {
  let actions$: Observable<any>;
  let effects: <%= classifiedName %>Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        <%= classifiedName %>Effects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(<%= classifiedName %>Effects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
