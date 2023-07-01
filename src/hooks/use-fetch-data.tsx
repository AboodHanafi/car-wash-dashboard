import { useEffect, useState } from 'react';
import CRUDRequsests from '../API';
import { token } from '../utils/global-var';
import { AxiosError } from 'axios';

const useFetchData = (endPoint: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>('');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await CRUDRequsests.get(endPoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(data.data);
      } catch (e) {
        const er = e as AxiosError;
        setError(er.response?.data);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { data, isLoading, error };
};
export default useFetchData;
