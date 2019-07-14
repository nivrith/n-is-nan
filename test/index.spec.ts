import {
  nIsNan
} from './../src/index';
import {
  expect
} from 'chai';

describe('nIsNan', () => {

  it('Returns true for `NaN`', () => {
    expect(nIsNan(NaN)).to.be.true;
  });

  it('Returns false for `25`', () => {
    expect(nIsNan(25)).to.be.false;
  });

  it('Returns false for `25`', () => {
    expect(nIsNan(true)).to.be.false;
  });

  it('Returns false for `null`', () => {
    expect(nIsNan(null)).to.be.false;
  });

  it('Returns false for `Infinity`', () => {
    expect(nIsNan(Infinity)).to.be.false;
  });

  it('Returns false for `-Infinity`', () => {
    expect(nIsNan(-Infinity)).to.be.false;
  });

  it('Returns false for `-0`', () => {
    expect(nIsNan(-0)).to.be.false;
  });
  it('Returns false for `{}`', () => {
    expect(nIsNan({})).to.be.false;
  });

  it('Returns false for `[]`', () => {
    expect(nIsNan([])).to.be.false;
  });

  it('Returns false for `MAX_SAFE_INTEGER`', () => {
    expect(nIsNan(Number.MAX_SAFE_INTEGER)).to.be.false;
  });
});
