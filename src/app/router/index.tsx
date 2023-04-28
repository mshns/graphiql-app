import { FC, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { About, LogIn, PlayGround, NotFound } from 'pages';
import { Layout } from 'shared/ui';
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
        id: 'Home'
      },
      {
        path: ROUTE.login,
        element: <LogIn />,
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
