import { useState } from 'react';
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

    return (
      <div className="card">
        <h2>{title}</h2>
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
