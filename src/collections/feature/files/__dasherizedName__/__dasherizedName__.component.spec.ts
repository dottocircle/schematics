import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= classifiedName %>Component } from './<%= dasherizedName %>.component';

describe('<%= classifiedName %>Component', () => {
  let component: <%= classifiedName %>Component;
  let fixture: ComponentFixture<<%= classifiedName %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [<%= classifiedName %>Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= classifiedName %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
