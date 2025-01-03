import { useEffect } from 'react';
import useApi from '../hooks/useFetch';

const Test = () => {
  const { sendRequest, data, error, loading } = useApi();

  useEffect(() => {
    sendRequest('https://jsonplaceholder.typicode.com/posts', 'GET');
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Test Component</h1>
      <ul>
        {data && data.map((item: { id: number, title: string }) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
