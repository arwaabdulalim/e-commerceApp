import React from 'react';
import Router from './src/config/navigation/Router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
