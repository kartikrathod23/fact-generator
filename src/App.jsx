import React, { useState } from 'react';
import CatFactCard from './components/CatFactCard';
import { getRandomCatFact } from './services/catFactService';

/**
 * Root component of the application.
 * Handles fetching and displaying random cat facts.
 */
const App = () => {
  // State to hold the current cat fact
  const [fact, setFact] = useState('');

  // State to indicate whether data is being loaded
  const [loading, setLoading] = useState(false);

  /**
   * Fetches a new cat fact and updates the state.
   * Handles both success and error scenarios.
   */
  const handleGetFact = async () => {
    setLoading(true);
    try {
      const newFact = await getRandomCatFact(); // Fetch from API
      setFact(newFact);                         // Update fact
    } catch (error) {
      // If fetch fails, display error message to user
      setFact('Something went wrong while fetching the cat fact.');
    } finally {
      // Stop loading in either case
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white">
      {/* Main UI component */}
      <CatFactCard
        fact={fact}
        loading={loading}
        onGetFact={handleGetFact}
      />
    </div>
  );
};

export default App;
