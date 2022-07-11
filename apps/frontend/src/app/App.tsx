// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { apolloClient } from './services/graphql';
import Home from './pages/Home/Home';
import PageLayout from './components/PageLayout/PageLayout';
import 'tailwindcss/tailwind.css';

export function App() {
  const client = useMemo(() => apolloClient(), []);

  return (
    <div id="App">
      <ApolloProvider client={client}>
        {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
          parent route elements. See the note about <Outlet> below. */}
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </ApolloProvider>
    </div>
  );
}

export default App;
