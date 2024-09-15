import { apiCall } from '../utils';
import { useQuery } from '@tanstack/react-query'

export async function getAllUsers() {
  const users = await apiCall<string[]>('/api', 'GET');
  return users;
}
  
export function useGetAllUsers() {
  return useQuery({ 
    queryKey: ['users'], 
    queryFn: getAllUsers
  })
}