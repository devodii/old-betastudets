import { useQuery } from '@tanstack/react-query';
import api from '../services/axios-instance';

export function useUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data } = await api.get('/api/course-rep/auth/whoAmI');
      return data;
    },
  });
}
