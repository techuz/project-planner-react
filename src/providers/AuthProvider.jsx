import { createContext, useContext, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = useCallback(
    async (data) => {
      setUser(data);
      navigate('/project-list');
    },
    [setUser, navigate]
  );

  // call this function when you forgot the password
  const forgotPassword = useCallback(async () => {}, []);

  // call this function when you want to reset the password
  const resetPassword = useCallback(async () => {
    navigate('/');
  }, [navigate]);

  // call this function to sign out logged in user
  const logout = useCallback(() => {
    setUser(null);
    navigate('/', { replace: true });
  }, [setUser, navigate]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      forgotPassword,
      resetPassword
    }),
    [user, login, logout, forgotPassword, resetPassword]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
