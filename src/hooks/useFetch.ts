import { useState } from 'react';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD';

interface UseApiResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  sendRequest: (url: string, method?: RequestMethod, body?: any) => void;
}

const useApi = <T = any>(initialData: T | null = null): UseApiResponse<T> => {
  const [data, setData] = useState<T | null>(initialData);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendRequest = async (
    url: string,
    method: RequestMethod = 'GET',
    body: any = null
  ) => {
    if ((method === 'GET' || method === 'HEAD') && body) {
      body = undefined;
    }
    if (body && Object.keys(body).length === 0) {
      console.log('No body to send');
      return;
    }

    setLoading(true);
    setError(null);

    const options: RequestInit = {
      method,
      headers: {
        'Content-Type':
          body instanceof FormData ? 'multipart/form-data' : 'application/json',
      },
      ...(Boolean(body) && {
        body: body instanceof FormData ? body : JSON.stringify(body),
      }),
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (error: any) {
      setError(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, sendRequest };
};

export default useApi;
