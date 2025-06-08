import React, { useState } from 'react';
import CatFactCard from './components/CatFactCard';
import { getRandomCatFact } from './services/catFactService';

const App = () => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGetFact = async () => {
    setLoading(true);
    try {
      const newFact = await getRandomCatFact();
      setFact(newFact);
    } catch (error) {
      setFact('Something went wrong while fetching the cat fact.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white">
      <CatFactCard
        fact={fact}
        loading={loading}
        onGetFact={handleGetFact}
      />
    </div>
  );
};

export default App;
