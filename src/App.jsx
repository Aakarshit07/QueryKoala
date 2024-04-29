import { AppRoutes } from "./components/Routes";
import Home from "./pages/Home";
import { RouterProvider } from "react-router-dom";

function App() {   
  return (
    <RouterProvider router={AppRoutes}>
      <Home />
    </RouterProvider>
  );
}

export default App;