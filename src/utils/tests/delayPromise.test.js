import delayPromise from '../delayPromise';

test('[utils] delayPromise(promise, delay) => newPromise', async () => {
  const startTime = Date.now();
  await delayPromise({}, 2000);
  const endTime = Date.now();
  expect(endTime - startTime).toBeGreaterThanOrEqual(2000);
});
