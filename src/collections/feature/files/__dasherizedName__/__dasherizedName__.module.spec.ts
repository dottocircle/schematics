import { <%= classifiedName %>Module } from './<%= dasherizedName %>.module';

describe('<%= classifiedName %>Module', () => {
  let <%= camelizedName %>Module: <%= classifiedName %>Module;

  beforeEach(() => {
    <%= camelizedName %>Module = new <%= classifiedName %>Module();
  });

  it('should create an instance', () => {
    expect(<%= camelizedName %>Module).toBeTruthy();
  });
});
