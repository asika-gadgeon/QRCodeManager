import { useQuery } from '@tanstack/react-query';
import { fetchQRList, fetchQRDetails } from '../../services/QR';

export function useQRlist() {
  return useQuery({
    queryKey: ['qrList'],
    queryFn: fetchQRList,
  });
}

export function useQRDetails(qrId: string) {
  return useQuery({
    queryKey: ['qrData', qrId],
    queryFn: () => fetchQRDetails(qrId),
  });
}