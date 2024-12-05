
import { DataStore } from 'aws-amplify/datastore';
import { Category, MenuItem } from '../models'; 
import { useState, useEffect } from 'react';

export function useMenuData(restaurantId: string) {
  const [categories, setCategories] = useState<Awaited<ReturnType<typeof Category.prototype.items.toArray>>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const categories = await DataStore.query(Category, c => 
          c.restaurantID.eq(restaurantId)
        );

        const categoriesWithItems = await Promise.all(
          categories.map(async (category) => {
            const items = await DataStore.query(MenuItem, m => 
              m.categoryID.eq(category.id)
            );
            return { ...category, items };
          })
        );

        setCategories(categoriesWithItems);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [restaurantId]);

  return { categories, loading, error };
}