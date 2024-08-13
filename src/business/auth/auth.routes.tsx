import { Navigate, Route, Routes } from 'react-router-dom';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="./login" />} />
      <Route path="login" element={<div>login</div>} />
    </Routes>
  );
};

export default AuthRoutes;
