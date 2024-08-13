import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
import AuthRouteGuard from '#/app/auth/authRouteGuard.tsx';
import Layout from '#/app/layout.tsx';

const LazyAuthRouting = lazy(() => import('#/business/auth/auth.routes.tsx'));

const LazyWelcomeRouting = lazy(
  () => import('#/business/welcome/welcome.routes.tsx')
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthRouteGuard>
        <Layout />
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
              <div className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status" />
              </div>
            }
          >
            <LazyWelcomeRouting />
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
