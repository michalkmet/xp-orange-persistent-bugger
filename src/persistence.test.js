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
  it('UAT1.7: When I pass 27, then I should see 2', () => {
    expect(persistence(27)).toBe(2);
  });
  it('UAT1.8: When I pass 38, then I should see 3', () => {
    expect(persistence(38)).toBe(3);
  });
});

describe('Story2: bigger nums', () => {
  it('UAT2.1: When I pass 39, then I should see 3', () => {
    expect(persistence(39)).toBe(3);
  });
  it('UAT2.2: When I pass 47, then I should see 3', () => {
    expect(persistence(47)).toBe(3);
  });
  it('UAT2.3: When I pass 88, then I should see 3', () => {
    expect(persistence(88)).toBe(3);
  });
  it('UAT2.4: When I pass 168, then I should see 4', () => {
    expect(persistence(168)).toBe(4);
  });
});
