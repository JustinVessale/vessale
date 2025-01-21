import { useState, useEffect } from 'react';
import { GraphQLError } from 'graphql';
import type { Schema } from 'amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

export function useCurrentRestaurant() {
  const [restaurant, setRestaurant] = useState<Schema["Restaurant"]["type"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchRestaurant() {
      const subdomain = "dev-restaurant";

      try {
        const response = await client.models.Restaurant.list()
        console.log('ZIPPER Response:', response);

        setRestaurant(response.data[0]);
      } catch (err) {
        console.log('ZIPPER Error:', ErrorEvent); 
        console.log('Full error:', err);
        setError(err instanceof Error ? err : new Error('Unexpected error occurred'));
      } finally {
        setLoading(false);
      }
    }

    fetchRestaurant();
  }, []);

  return { restaurant, loading, error };
}