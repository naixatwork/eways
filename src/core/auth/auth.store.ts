import { create } from 'zustand';
import { User } from '#/core/user/user.types.ts';

type useAuthStoreType = {
  user: User;
  isAuthenticated: boolean;
  login: (_: User) => void;
  logout: () => void;
};

const useAuthStore = create<useAuthStoreType>((set) => ({
  user: {
    username: '',
    password: '',
    remember: false,
  },
  isAuthenticated: false,
  login: ({ username, password, remember }: User) =>
    set({
      user: {
        username,
        password,
        remember,
      },
      isAuthenticated: true,
    }),
  logout: () =>
    set({
      user: {
        username: '',
        password: '',
        remember: false,
      },
      isAuthenticated: false,
    }),
}));

export default useAuthStore;
