import { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { RESPONSE_CODES, isGraphqlError, throwToastify, useAppSelector } from 'shared';

export const useGetResponse = () => {
  const [response, setResponse] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState(0);

  const { requestObject } = useAppSelector((state) => state.editorReducer);

  useEffect(() => {
    if (requestObject) {
      const { query, variables, headers } = requestObject;
      (async () => {
        setResponse('{}');
        setIsLoading(true);
        try {
          const data = await request<unknown>(import.meta.env.VITE_GRAPH_API, query, variables, headers);

          setResponse(data);
          setResponseStatus(RESPONSE_CODES.ok);
        } catch (error) {
          setIsLoading(false);
          setResponseStatus(RESPONSE_CODES.serverError);

          const errorObj = JSON.parse(JSON.stringify(error));

          if (isGraphqlError(errorObj)) {
            errorObj.response.errors.forEach((error) => {
              throwToastify(`message: ${error.message}`, 'error');
            });

            return;
          }

          throwToastify(JSON.stringify(error), 'error');
        }

        setIsLoading(false);
      })();
    }
  }, [requestObject]);

  return { response, isLoading, responseStatus };
};
