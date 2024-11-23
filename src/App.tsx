
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import Layout from './components/Layout';
import Menu from './components/Menu';  // We'll create this next

const client = generateClient<Schema>();

  function App() {
    return (
      <Layout>
        <Menu />
      </Layout>
    );
  }

export default App;
