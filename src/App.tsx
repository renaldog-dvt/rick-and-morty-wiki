import { Outlet } from "react-router";
import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      gcTime: 10000
    }
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col gap-4 bg-base-200 h-dvh w-dvw p-4">
        <NavigationBar />
        <div className="max-h-full max-w-full">
          <Outlet />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
