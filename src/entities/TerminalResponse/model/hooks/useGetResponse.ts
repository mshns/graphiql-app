import { useContext, useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { useTheme } from '@mui/material';
import { PlaygroundContext, RESPONSE_CODES, isGraphqlError, throwToastify, useAppSelector } from 'shared';

export const useGetResponse = () => {
  const [response, setResponse] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);

  const { setResponseStatus } = useContext(PlaygroundContext);
  const { requestObject } = useAppSelector((state) => state.editorReducer);

  const theme = useTheme();

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
              throwToastify(`message: ${error.message}`, 'error', theme.palette.mode);
            });

            return;
          }

          throwToastify(JSON.stringify(error), 'error', theme.palette.mode);
        }

        setIsLoading(false);
      })();
    }
  }, [requestObject, setResponseStatus, theme.palette.mode]);

  return { response, isLoading };
};
