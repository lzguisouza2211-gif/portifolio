import { Toaster } from "./components/ui/toaster"
// importações removidas porque já estão presentes abaixo
import NavigationTracker from './lib/NavigationTracker'

import { AuthProvider } from './lib/AuthContext';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from './lib/query-client';
import AppRouter from './router';



function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <AppRouter />
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App
