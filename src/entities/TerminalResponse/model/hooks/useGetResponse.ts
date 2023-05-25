import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { RESPONSE_CODES, isGraphqlError, throwToastify, useAppSelector } from 'shared';

type Props = {
  setResponseStatus: Dispatch<SetStateAction<number>>;
};

export const useGetResponse = ({ setResponseStatus }: Props) => {
  const [response, setResponse] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);

  const { requestObject } = useAppSelector((state) => state.editorReducer);

  useEffect(() => {
    if (requestObject) {
      const { query, variables, headers } = requestObject;
      (async () => {
        setResponse('{}');
        setResponseStatus(0);
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
  }, [requestObject, setResponseStatus]);

  return { response, isLoading };
};
