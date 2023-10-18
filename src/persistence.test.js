const persistence = require('./persistence');

describe('Story1: small nums', () => {
  it('UAT1.1: When I pass 4, then I should see 0', () => {
    expect(persistence(4)).toBe(0);
  });
  it('UAT1.2: When I pass 9, then I should see 0', () => {
    expect(persistence(9)).toBe(0);
  });
  it('UAT1.3: When I pass 10, then I should see 1', () => {
    expect(persistence(10)).toBe(1);
  });
  it('UAT1.4: When I pass 19, then I should see 1', () => {
    expect(persistence(19)).toBe(1);
  });
  it('UAT1.5: When I pass 20, then I should see 1', () => {
    expect(persistence(20)).toBe(1);
  });
  it('UAT1.6: When I pass 25, then I should see 2', () => {
    expect(persistence(25)).toBe(2);
  });
});
