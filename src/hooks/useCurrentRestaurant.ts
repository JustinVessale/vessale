// src/hooks/useCurrentRestaurant.ts
import { DataStore } from '@aws-amplify/datastore';
import { Restaurant } from '../models';
import { useState, useEffect } from 'react';

export function useCurrentRestaurant() {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchRestaurant() {
      try {
        // Get subdomain from window.location.hostname
        const subdomain = window.location.hostname.split('.')[0];
        
        const [restaurantData] = await DataStore.query(Restaurant, r => 
          r.subdomain.eq(subdomain)
        );

        if (!restaurantData) {
          throw new Error('Restaurant not found');
        }

        setRestaurant(restaurantData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchRestaurant();
  }, []);

  return { restaurant, loading, error };
}