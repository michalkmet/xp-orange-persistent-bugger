const persistence = require('./persistence');

describe('Story1: small nums', () => {
  it('UAT1.1: When I pass 4, then I should see 0', () => {
    expect(persistence(4)).toBe(0);
  });
  it('UAT1.2: When I pass 9, then I should see 0', () => {
    expect(persistence(9)).toBe(0);
  });
});
