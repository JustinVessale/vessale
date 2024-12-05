// File used to find the current restaurant based on the subdomain 
// Uses a default for the dev subdomain

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
        const hostname = window.location.hostname;
        const subdomain = hostname.includes('amplifyapp.com') 
            ? 'dev-restaurant'  // Default dev subdomain
            : hostname.split('.')[0];
        
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