type LocalStorageRequest = {
  query: string;
  variables: string;
  headers: string;
};

export const isRequestObject = (type: unknown): type is LocalStorageRequest => {
  if (type instanceof Object) {
    return 'query' in type && 'variables' in type && 'headers' in type;
  }

  return false;
};
