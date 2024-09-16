import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {navItems.map(({ to, page, subItems }) => (
            <React.Fragment key={to}>
              <Route path={to} element={page} />
              {subItems && subItems.map(({ to: subTo, page: subPage }) => (
                <Route key={subTo} path={subTo} element={subPage} />
              ))}
            </React.Fragment>
          ))}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
