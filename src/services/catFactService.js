/**
 * Fetches a random cat fact from the public Cat Fact Ninja API.
 *
 * @returns {Promise<string>} The fetched cat fact.
 * @throws {Error} If the request fails.
 */
export const getRandomCatFact = async () => {
  const response = await fetch('https://catfact.ninja/fact');

  // Check if response is valid
  if (!response.ok) {
    throw new Error('Failed to fetch cat fact');
  }

  // Parse the fact from the response body
  const data = await response.json();
  return data.fact;
};
