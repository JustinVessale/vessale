
import { loadStripe } from '@stripe/stripe-js';
import { useState, useEffect } from 'react';
import type { Schema } from 'amplify/data/resource';
import { Elements } from '@stripe/react-stripe-js';
import { PaymentProvider } from './context/PaymentContext';
import Layout from './components/Layout';
import Menu from './components/Menu'; 
import { CartProvider } from './context/CartContext';
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();


const stripePromise = loadStripe('pk_test_51QVg02Rw4VOaUPHgG54hHPF9r90r8HE4T69Utt698eOmOXd7dPIXfoevxViBjoyvcsSwNWzzjJF2SiIKM8iWIhAa00QsC6mAux');

function App() {
  const [restaurants, setRestaurant] = useState<Array<Schema["Restaurant"]["type"]>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchRestaurant() {
      const subdomain = "dev-restaurant";

      try {
        const response = await client.models.Restaurant.list()
        console.log('ZIPPER Response:', response);

        setRestaurant(response.data);
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
  return (
    <main>
      <h1>My todos</h1>
  
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name ?? "JAK TESTER"}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
    </main>
  );
}

export default App;
