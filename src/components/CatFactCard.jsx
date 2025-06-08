import React from 'react';

/**
 * Component to display a cat fact card with a button to fetch new facts.
 *
 * Props:
 * - fact: (string) The current cat fact to display.
 * - loading: (boolean) Whether the fact is currently being fetched.
 * - onGetFact: (function) Callback to trigger a new fetch.
 */
const CatFactCard = ({ fact, loading, onGetFact }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md w-full">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-4">🐱 Random Cat Facts</h1>

      {/* Instructional subtext */}
      <p className="text-gray-600 mb-6">
        Click the button below to discover fascinating facts about cats!
      </p>

      {/* Button to fetch a new fact */}
      <button
        onClick={onGetFact}
        className="bg-gray-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-700 transition disabled:opacity-60"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Get Random Cat Fact'}
      </button>

      {/* Display the fetched cat fact */}
      {fact && (
        <div className="mt-6 p-4 border rounded text-gray-800 bg-gray-50">
          "{fact}"
        </div>
      )}
    </div>
  );
};

export default CatFactCard;
