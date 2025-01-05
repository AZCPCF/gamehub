import { FC } from 'react';
import { useAppStore } from '../../store/useStore';

const Home: FC = () => {
  const { count, increment, decrement } = useAppStore();

  return (
    <div>
      <h2>Home Page</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Home;
