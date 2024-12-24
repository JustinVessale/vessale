
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { PaymentProvider } from './context/PaymentContext';
import Layout from './components/Layout';
import Menu from './components/Menu'; 
import { CartProvider } from './context/CartContext';

const stripePromise = loadStripe('pk_test_51QVg02Rw4VOaUPHgG54hHPF9r90r8HE4T69Utt698eOmOXd7dPIXfoevxViBjoyvcsSwNWzzjJF2SiIKM8iWIhAa00QsC6mAux');

  function App() {
    return (
      <PaymentProvider>
        <Elements stripe={stripePromise}>
              <CartProvider>
        <Layout>
          <Menu />
        </Layout>
      </CartProvider>
      </Elements>
      </PaymentProvider>

    );
  }

export default App;
