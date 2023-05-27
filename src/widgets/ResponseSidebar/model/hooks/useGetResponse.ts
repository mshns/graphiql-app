import { useContext, useEffect, useState } from 'react';
import { request } from 'graphql-request';
import {
  PlaygroundContext,
  RESPONSE_CODES,
  isGraphqlError,
  useThrowToastify,
  useAppSelector,
  useAppActions
} from 'shared';

export const useGetResponse = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setResponseStatus } = useContext(PlaygroundContext);
  const { requestObject } = useAppSelector((state) => state.editorReducer);
  const { setRequestObject, setResponse } = useAppActions();
  const { throwToastify } = useThrowToastify();

  useEffect(() => {
    if (requestObject) {
      const { query, variables, headers } = requestObject;
      (async () => {
        setIsLoading(true);
        try {
          const data = await request<unknown>(import.meta.env.VITE_GRAPH_API, query, variables, headers);

          setResponse(data);
          setResponseStatus(RESPONSE_CODES.ok);
        } catch (error) {
          setResponse('{}');
          setResponseStatus(RESPONSE_CODES.serverError);

          const errorObj = JSON.parse(JSON.stringify(error));

          if (isGraphqlError(errorObj)) {
            errorObj.response.errors.forEach((error) => {
              throwToastify(`message: ${error.message}`, 'error');
            });
          } else {
            throwToastify(JSON.stringify(error), 'error');
          }
        }

        setIsLoading(false);
        setRequestObject(null);
      })();
    }
  }, [requestObject, setResponseStatus, throwToastify, setRequestObject, setResponse]);

  return { isLoading };
};
