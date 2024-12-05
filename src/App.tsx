
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import Layout from './components/Layout';
import Menu from './components/Menu'; 
import { CartProvider } from './context/CartContext';


  function App() {
    return (
      <CartProvider>
        <Layout>
          <Menu />
        </Layout>
      </CartProvider>
    );
  }

export default App;
