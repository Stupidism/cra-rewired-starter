import wretch from 'wretch';

const baseUrl = process.env.REACT_APP_API_URL;

export const globalResultResolver = request => request.json();

export const createFetch = wretchInstance => options => {
  if (typeof options !== 'object')
    throw new Error('[fetch]: Object options is required!');

  const { url, method = 'GET', ...extraOptions } = options;

  const replaceUrl =
    !!url && (url.startsWith('https://') || url.startsWith('http://'));

  return wretchInstance.url(url, replaceUrl).method(method, extraOptions);
};

export const wretchInstance = wretch()
  .url(baseUrl)
  .resolve(globalResultResolver);

export default createFetch(wretchInstance);
