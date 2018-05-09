import logoSpinning from '../logoSpinning';

test('[selector] logoSpinning() should select runtime.logoSpinning from state', function() {
  const state = { runtime: { logoSpinning: true } };
  expect(logoSpinning(state)).toBe(true);
});
