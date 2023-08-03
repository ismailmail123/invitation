import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from './pages/homePage';
import InvitationPage from "./pages/invitationPage";
import InvitationVisitedPage from "./pages/invitation-visited";
import Update from './contoiners/Table';
import Edit from './contoiners/Table/Edit';
import Card from "./contoiners/Card/index";


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
    {
      path: '/update',
      element: <Update />,
    },
    {
      path: '/edit/:id',
      element: <Edit />,
    },
    {
      path: '/cards',
      element: <Card />,
    },
    
  ]);
  return <RouterProvider router={router} />
}

export default App;
