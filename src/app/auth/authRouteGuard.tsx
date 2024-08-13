import useAuthStore from '#/core/auth/auth.store.ts';
import { ReactNode } from 'react';

type AuthRouteGuardProps = {
  children: ReactNode;
};

const AuthRouteGuard = ({ children }: AuthRouteGuardProps) => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    const currentPathOrigin = window.location.origin;
    window.location.href = `${currentPathOrigin}/auth`;
    return children;
  }

  return children;
};

export default AuthRouteGuard;
