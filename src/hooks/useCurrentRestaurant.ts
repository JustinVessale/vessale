import { useState, useEffect } from 'react';
import { generateClient, type GraphQLResult } from 'aws-amplify/api';
import { GraphQLError } from 'graphql';
import { listRestaurants } from '../graphql/queries';
import { Restaurant, ListRestaurantsQuery } from '../API';


export function useCurrentRestaurant() {
 const client = generateClient();
 const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState<Error | null>(null);

 useEffect(() => {
   async function fetchRestaurant() {
    //  const subdomain = window.location.hostname.includes('amplifyapp.com') 
    //    ? ENV.defaultSubdomain 
    //    : window.location.hostname.split('.')[0];
    const subdomain = "dev-restaurant"

     try {
      const response = await client.graphql<ListRestaurantsQuery>({
        query: listRestaurants,
        variables: {
          filter: { subdomain: { eq: subdomain } }
        }
      }) as GraphQLResult<ListRestaurantsQuery>;
       
      console.log('API Response:', response);

       const restaurantData = response.data?.listRestaurants?.items[0];
       
       if (!restaurantData) {
         throw new Error(`No restaurant found for subdomain: ${subdomain}`);
       }
       
       setRestaurant(restaurantData);
     } catch (err) {
       if (err instanceof GraphQLError) {
         setError(new Error('Failed to fetch restaurant data'));
       } else {
         setError(new Error('Unexpected error occurred'));
       }
     } finally {
       setLoading(false);
     }
   }

   fetchRestaurant();
 }, []);

 return { restaurant, loading, error };
}