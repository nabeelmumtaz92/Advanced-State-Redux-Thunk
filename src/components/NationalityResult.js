// src/components/NationalityResult.js
import React from 'react';
import { useSelector } from 'react-redux';

const NationalityResult = () => {
  const { loading, error, data } = useSelector((state) => state.nationality);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  return (
    <div>
      <h2>Predicted Nationalities:</h2>
      <ul>
        {data.country.map((country) => (
          <li key={country.country_id}>
            {country.country_id}: {Math.round(country.probability * 100)}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NationalityResult;
