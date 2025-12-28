import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const VideosPage = lazy(() => import('../pages/videos/page'));
const BlogPage = lazy(() => import('../pages/blog/page'));
const LoginPage = lazy(() => import('../pages/login/page'));
const PainelMembrosPage = lazy(() => import('../pages/membros/painel/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/videos',
    element: <VideosPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/membros/painel',
    element: <PainelMembrosPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;