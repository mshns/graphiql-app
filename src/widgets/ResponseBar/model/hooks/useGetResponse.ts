import { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { IRequestObject } from 'shared';

export const useGetResponse = (requestObject: IRequestObject | null) => {
  const [response, setResponse] = useState<unknown>();

  useEffect(() => {
    if (requestObject) {
      (async () => {
        try {
          const data = await request<unknown>(import.meta.env.VITE_GRAPH_API, requestObject.query);

          setResponse(data);
        } catch (error) {
          // if (error instanceof Error) {
          //   console.log(error.message);
          // }
        }
      })();
    }
  }, [requestObject]);

  return { response };
};
