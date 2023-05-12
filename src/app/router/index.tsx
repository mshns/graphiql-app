import { FC } from 'react';
import { RouterProvider, createBrowserRouter, RouteObject } from 'react-router-dom';
import { Layout } from 'processes';
import { ROUTE, getLazyComponent } from 'shared';

const About = getLazyComponent('pages', 'About');
const PlayGround = getLazyComponent('pages', 'PlayGround');
const LogIn = getLazyComponent('pages', 'LogIn');
const SignUp = getLazyComponent('pages', 'SignUp');
const NotFound = getLazyComponent('pages', 'NotFound');

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

export const Router: FC = () => <RouterProvider router={router} />;
