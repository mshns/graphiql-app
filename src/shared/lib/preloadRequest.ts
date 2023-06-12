import { DEFAULT_QUERY } from 'shared/constants';
import { isRequestObject } from 'shared/lib/type-guard';

export const preloadRequest = () => {
  const requestStr = localStorage.getItem('[graphiql]request');

  if (requestStr) {
    const requestObj = JSON.parse(requestStr);

    if (isRequestObject(requestObj)) {
      return requestObj;
    }
  }

  return DEFAULT_QUERY;
};
