import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../services/axios-instance';

export function AuthProvider({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  React.useEffect(() => {
    async function fetchWhoAmI() {
      const { data: user } = await api.get('/api/course-rep/auth/whoAmI');

      if (!user?.email && !['/sign-in'].includes(pathname)) {
        navigate('/sign-in');
      }

      if (user?.email && ['/sign-in', '/'].includes(pathname)) {
        navigate('/dashboard');
      }
    }

    fetchWhoAmI();
  }, [pathname, navigate]);

  return <div>{children}</div>;
}
