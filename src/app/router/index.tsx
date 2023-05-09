import { FC, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from 'processes';
import { ROUTE } from './constants';

const About = lazy(() => import('pages/About/About'));
const PlayGround = lazy(() => import('pages/Playground/ui/Playground'));
const LogIn = lazy(() => import('pages/LogIn/LogIn'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

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

export const Router: FC = () => <RouterProvider router={router} />;
