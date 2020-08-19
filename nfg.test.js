import * as lib from './nfq';

describe('lib', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it(lib.sum.name, () => {
    expect(lib.sum(2,3)).toEqual(5);
  });
});
