import { isRequestObject } from 'shared/lib/type-guard';

export const preloadRequest = () => {
  const requestStr = localStorage.getItem('[graphiql]request');

  if (requestStr) {
    const requestObj = JSON.parse(requestStr);

    if (isRequestObject(requestObj)) {
      return requestObj;
    }
  }

  return {
    query: `query ($id: ID!) {
  character(id: $id) {
    name
  }
}`,
    variables: '{ "id": "10" }',
    headers: '{}'
  };
};
