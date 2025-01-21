import { useState, useEffect } from 'react';
import { GraphQLError } from 'graphql';
import type { Schema } from 'amplify/data/resource';
import { generateClient, type SelectionSet } from 'aws-amplify/data';

const client = generateClient<Schema>();

// Define selection sets for our queries
const categorySelectionSet = ['id', 'name', 'restaurantID'] as const;
const menuItemSelectionSet = ['id', 'name', 'description', 'price', 'categoryID'] as const;

// Define types based on the selection sets
type CategoryData = SelectionSet<
  Schema['Category']['type'],
  typeof categorySelectionSet
>;

type MenuItemData = SelectionSet<
  Schema['MenuItem']['type'],
  typeof menuItemSelectionSet
>;

// Define combined type for category with its items
type CategoryWithItems = CategoryData & {
  items: MenuItemData[];
};

export function useMenuData(restaurantId: string) {
  const [categories, setCategories] = useState<CategoryWithItems[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch categories for the restaurant
        const { data: categoriesResponse } = await client.models.Category.list({
          selectionSet: categorySelectionSet,
          filter: {
            restaurantID: {
              eq: restaurantId
            }
          }
        });

        // Fetch menu items for each category
        const categoriesWithItems = await Promise.all(
          categoriesResponse.map(async (category) => {
            const { data: menuItems } = await client.models.MenuItem.list({
              selectionSet: menuItemSelectionSet,
              filter: {
                categoryID: {
                  eq: category.id ?? "1"
                }
              }
            });

            return {
              ...category,
              items: menuItems
            };
          })
        );

        setCategories(categoriesWithItems);
      } catch (err) {
        console.log('Full error:', err); // See complete error object
        console.log('Error type:', error); // See error type
        
        if (err instanceof GraphQLError) {
          setError(new Error('Failed to fetch menu data'));
        } else {
          setError(new Error('Unexpected error occurred'));
        }
      } finally {
        setLoading(false);
      }
    }

    if (restaurantId) {
      fetchData();
    }
  }, [restaurantId]);

  return { categories, loading, error };
}