import { FC, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { About, LogIn, PlayGround, NotFound } from 'pages';
import { Layout } from 'processes';
import { ROUTE } from './constants';

export const routes = [
  {
    path: ROUTE.about,
    element: <Layout />,
    id: 'Layout',
    children: [
      {
        index: true,
        element: <About />,
        id: 'About'
      },
      {
        path: ROUTE.playground,
        element: <PlayGround />,
        id: 'playground'
      }
    ]
  },
  {
    path: ROUTE.login,
    element: <LogIn />,
    id: 'LogIn'
  },
  {
    path: ROUTE.notFound,
    element: <NotFound />,
    id: 'NotFound'
  }
];

const router = createBrowserRouter(routes);

export const Router: FC = () => (
  <Suspense fallback={<CircularProgress />}>
    <RouterProvider router={router} />
  </Suspense>
);
