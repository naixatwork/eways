import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '#/business/auth/login.tsx';
import AuthLayout from '#/business/auth/auth.layout.tsx';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route index element={<Navigate to="./login" />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
