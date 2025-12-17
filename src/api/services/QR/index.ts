import { useQuery, useMutation, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fetchApi } from '../../api';
import type { QRList, UseQRlistResult } from '../../types';

export function useQRlist(): UseQRlistResult {
  const { data: QRList, isLoading, error } = useQuery<QRList[], Error>({
    queryKey: ['qrList'],
    queryFn: fetchQRList,
  });

  const errorMessage = error ? `Error: ${error.message}` : null;
  console.log(QRList);

  return {
    QRList,
    isLoading,
    error: errorMessage,
  };
}

export async function fetchQRList() {
  const response = await fetchApi('/Admin/GetAllDomains');
  const data = await response;
  return data;
}

export async function fetchQRDetails(qrId: string): Promise<QRList> {
  const response = await fetchApi(`/qr/${qrId}`);
  const data: QRList = await response.json();
  return data;
}