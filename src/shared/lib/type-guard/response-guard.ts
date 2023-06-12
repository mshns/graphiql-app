type ErrorLocations = { line: number; column: number };
type ErrorMessage = { message: string; locations: ErrorLocations[] };
type ErrorResponse = { request: unknown; response: { errors: ErrorMessage[] } };

export const isGraphqlError = (type: unknown): type is ErrorResponse => {
  if (type instanceof Object) {
    return 'request' in type && 'response' in type;
  }

  return false;
};
