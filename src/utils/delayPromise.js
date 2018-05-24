export default (promise, delay) =>
  new Promise(resolve => setTimeout(() => resolve(promise), delay));
