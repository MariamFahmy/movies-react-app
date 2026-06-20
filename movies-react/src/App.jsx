import { useState, useEffect } from 'react';
import './App.css';

const Card = ({ title }) => {
  // State is not persistent across browser reloads
  // On reloading the page, the component gets rerendered and the state
  // returns to its initial value defined by useState's initialState
  // parameter

  /**
   * When the state changes, React automatically re-renders the component
   * to reflect the new data; it does not reload the page.
   * React only re-renders the Card component that has had its state change.
   */
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);

  // Runs only once on the mounting of the component, i.e. only
  // when it first appears
  useEffect(() => {
    console.log('CARD MOUNTED');
  }, []);

  // When Strict Mode is on, in development, React runs setup and cleanup
  // one extra time before the actual setup. This does not happen in production.
  // Remove StrictMode wrapper in main.jsx to ensure useEffect does not run twice at
  // the start.
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  /**
   * In more complex interfaces, it is never recommended to
   * update the value of the state by using the state itself
   * instead use setCount((prevState) => prevState + 1)
   * Same with setHasLiked
   */
  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>
        {title} <br /> {count || null}
      </h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true} />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  );
};

export default App;
