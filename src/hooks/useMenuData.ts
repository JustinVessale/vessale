import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { type GraphQLResult } from '@aws-amplify/api';
import { Category } from '../API';

const GET_MENU_DATA = /* GraphQL */ `
  query GetMenuData($restaurantId: ID!) {
    listCategories(filter: { restaurantID: { eq: $restaurantId } }) {
      items {
        id
        name
        items {
          items {
            id
            name
            description
            price
            categoryID
          }
        }
      }
    }
  }
`;

type GetMenuDataQuery = {
 listCategories: {
   items: Category[];
 }
}

export function useMenuData(restaurantId: string) {
 const client = generateClient();
 const [categories, setCategories] = useState<Category[]>([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState<Error | null>(null);

 useEffect(() => {
   async function fetchData() {
     if (!restaurantId) return;

     try {
       const response = await client.graphql<GetMenuDataQuery>({
         query: GET_MENU_DATA,
         variables: { restaurantId }
       }) as GraphQLResult<GetMenuDataQuery>;

       const menuCategories = response.data?.listCategories.items || [];
       setCategories(menuCategories);
     } catch (err) {
       console.error('Error fetching menu data:', err);
       setError(new Error('Failed to load menu data'));
     } finally {
       setLoading(false);
     }
   }

   fetchData();
 }, [restaurantId]);

 return { categories, loading, error };
}