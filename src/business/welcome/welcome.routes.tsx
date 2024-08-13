import { Route, Routes } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const WelcomeRoutes = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <div className="w-100 h-100 d-flex justify-content-center align-items-center">
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
