import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from './pages/homePage';
import InvitationPage from "./pages/invitationPage";
import InvitationVisitedPage from "./pages/invitation-visited";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/invitation',
      element: <InvitationPage />,
    },
    {
      path: '/visited',
      element: <InvitationVisitedPage />,
    },
    
  ]);
  return <RouterProvider router={router} />
}

export default App;
