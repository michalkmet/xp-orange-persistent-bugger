const persistence = require('./persistence');

describe('hello', () => {
  it('should return hello', () => {
    expect(persistence()).toBe('hello');
  });
});
