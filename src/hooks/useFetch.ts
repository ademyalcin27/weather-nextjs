import { snakeCaseToCamelCase } from '@/utils/snakeCaseToCamelCase';
import { useState } from 'react';


export default function useDataFetching<T>(url: string, options = {}) {
  const [data, setData] = useState<T|null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null|Error>(null);
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
       if(json.error) {
          setError(json);
          return;
       }
        setData(snakeCaseToCamelCase(json));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  return { data, loading, error, fetchData};
}
