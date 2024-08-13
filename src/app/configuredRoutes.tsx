import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
import AuthRouteGuard from '#/app/auth/authRouteGuard.tsx';

const LazyAuthRouting = lazy(() => import('#/business/auth/auth.routes.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthRouteGuard>
        <Outlet />
      </AuthRouteGuard>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="welcome" />,
      },
      {
        path: '/welcome/*',
        element: (
          <Suspense
            fallback={
              <div className="flex h-full justify-center items-center flex-col gap-5">
                <h1 className="text-2xl">We are Loading your dashboard...</h1>
              </div>
            }
          >
            <div>hi</div>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: 'auth/*',
    element: (
      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" role="status" />
          </div>
        }
      >
        <LazyAuthRouting />
      </Suspense>
    ),
  },
]);

const ConfiguredRoutes = () => <RouterProvider router={router} />;

export default ConfiguredRoutes;
