import { FC } from 'react';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import { Layout } from 'processes';
import { ROUTE, getLazyComponent } from 'shared';
import { RequireAuth } from './RequireAuth';

const About = getLazyComponent('pages', 'About');
const PlayGround = getLazyComponent('pages', 'PlayGround');
const LogIn = getLazyComponent('pages', 'LogIn');
const SignUp = getLazyComponent('pages', 'SignUp');
const NotFound = getLazyComponent('pages', 'NotFound');

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.About} element={<Layout />}>
      <Route index element={<About />} />

      <Route element={<RequireAuth />}>
        <Route path={ROUTE.Playground} element={<PlayGround />} />
      </Route>
      <Route path={ROUTE.NotFound} element={<NotFound />} />
      <Route path={ROUTE.SignUp} element={<SignUp />} />
      <Route path={ROUTE.Login} element={<LogIn />} />
    </Route>
  )
);

export const Router: FC = () => <RouterProvider router={router} />;
