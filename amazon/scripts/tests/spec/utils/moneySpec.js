import { formatCurrency } from '../../../utils/money.js';

describe('formatCurrency', () => {
  it('converts cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
    expect(formatCurrency(2001)).toEqual('20.01');
  });

  it('rounds up correctly', () => {
    expect(formatCurrency(205.9)).toEqual('2.06');
  });

  it('rounds down correctly', () => {
    expect(formatCurrency(205.4)).toEqual('2.05');
  });

  it('handles zero', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });
});
