import React from 'react';

const CatFactCard = ({ fact, loading, onGetFact }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md w-full">
      <h1 className="text-2xl font-bold mb-4">🐱 Random Cat Facts</h1>
      <p className="text-gray-600 mb-6">
        Click the button below to discover fascinating facts about cats!
      </p>
      <button
        onClick={onGetFact}
        className="bg-gray-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-700 transition disabled:opacity-60"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Get Random Cat Fact'}
      </button>
      {fact && (
        <div className="mt-6 p-4 border rounded text-gray-800 bg-gray-50">
          "{fact}"
        </div>
      )}
    </div>
  );
};

export default CatFactCard;
