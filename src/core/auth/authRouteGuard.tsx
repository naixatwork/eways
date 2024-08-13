import useAuthStore from '#/core/auth/auth.store.ts';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

type AuthRouteGuardProps = {
  children: ReactNode;
};

const AuthRouteGuard = ({ children }: AuthRouteGuardProps) => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    console.log('called');
    navigate('/auth');
    return children;
  }

  return children;
};

export default AuthRouteGuard;
