import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layouts/Layout";
import HelpCenter from "./pages/HelpCenter";
import UsingAbstract from "./pages/UsingAbstract";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HelpCenter /> },
      { path: "using-abstract", element: <UsingAbstract /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
