import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../services/axios-instance';

export function AuthProvider({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  React.useEffect(() => {
    async function fetchWhoAmI() {
      // expects an email
      const { data: user } = await axiosInstance.get('/api/course-rep/auth/whoAmI');

      console.log({ user });
      if (!user?.email && pathname === '/') {
        navigate('/sign-in');
      }

      if (user?.email && pathname.includes('/sign-in')) {
        navigate('/');
      }
    }

    fetchWhoAmI();
  }, [pathname, navigate]);

  return <div>{children}</div>;
}
