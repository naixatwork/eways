import { Route, Routes } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { useContext } from 'react';
import NavbarContext from '#/core/layout/navbarContext.ts';
import { createPortal } from 'react-dom';
import useAuthStore from '#/core/auth/auth.store.ts';

const WelcomeRoutes = () => {
  const { centerContentRef } = useContext(NavbarContext);
  const { user } = useAuthStore();

  return (
    <Routes>
      <Route
        index
        element={
          <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            {centerContentRef.current &&
              createPortal(
                <p className="mb-0">
                  <span className="fw-bold">{user.username}</span>
                </p>,
                centerContentRef.current
              )}
            <Alert variant="success">
              Hi Eways team :) hope you'll like my project.
            </Alert>
          </div>
        }
      />
    </Routes>
  );
};

export default WelcomeRoutes;
