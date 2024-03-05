import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../services/axios-instance';

export function useUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data } = await axiosInstance.get('/api/course-rep/auth/whoAmI');
      return data;
    },
  });
}
