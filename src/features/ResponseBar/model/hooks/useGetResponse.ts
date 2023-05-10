import { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { IRequestObject } from 'shared';

export const useGetResponse = (requestObject: IRequestObject | null) => {
  const [response, setResponse] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (requestObject) {
      (async () => {
        try {
          setIsLoading(true);
          const data = await request<unknown>(import.meta.env.VITE_GRAPH_API, requestObject.query);

          setResponse(data);
        } catch (error) {
          // if (error instanceof Error) {
          //   console.log(error.message);
          // }
        }

        setIsLoading(false);
      })();
    }
  }, [requestObject]);

  return { response, isLoading };
};
