import { 
  Load<%= classifiedName %>,
  Load<%= classifiedName %>Success,
  Load<%= classifiedName %>Fail,
 } from './<%= dasherizedName %>.actions';

describe('Load<%= classifiedName %>', () => {
  it('should create an instance', () => {
    expect(new Load<%= classifiedName %>()).toBeTruthy();
  });
});

describe('Load<%= classifiedName %>Success', () => {
  it('should create an instance', () => {
    expect(new Load<%= classifiedName %>Success(null)).toBeTruthy();
  });
});

describe('Load<%= classifiedName %>Fail', () => {
  it('should create an instance', () => {
    expect(new Load<%= classifiedName %>Fail()).toBeTruthy();
  });
});
