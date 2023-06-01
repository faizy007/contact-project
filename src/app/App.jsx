import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const content = useRoutes(routes);
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>{content}</Suspense>
    </Provider>
    </QueryClientProvider>
  );
}

export default App;
