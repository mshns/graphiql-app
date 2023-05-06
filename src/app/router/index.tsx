import { FC, Suspense } from 'react';
import { RouterProvider, createBrowserRouter, RouteObject } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { Layout } from 'processes';
import { About, LogIn, PlayGround, NotFound, SignUp } from 'pages';
import { ROUTE } from 'shared/constants';

export const routes: RouteObject[] = [
  {
    path: ROUTE.About,
    element: <Layout />,
    id: 'Layout',
    children: [
      {
        index: true,
        element: <About />,
        id: 'About'
      },
      {
        path: ROUTE.Playground,
        element: <PlayGround />,
        id: 'playground'
      },
      {
        path: ROUTE.Login,
        element: <LogIn />,
        id: 'LogIn'
      },
      {
        path: ROUTE.SignUp,
        element: <SignUp />,
        id: 'SignUp'
      },
      {
        path: ROUTE.NotFound,
        element: <NotFound />,
        id: 'NotFound'
      }
    ]
  }
];

const router = createBrowserRouter(routes);

export const Router: FC = () => (
  <Suspense fallback={<CircularProgress />}>
    <RouterProvider router={router} />
  </Suspense>
);
