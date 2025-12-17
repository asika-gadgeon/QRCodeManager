
export interface QRList {
  id: string;
  domain: string;
  subdomain: string | null;
  description: string | null;
  createdBy: string | null;
  createdAt: string;
}

export interface UseQRlistResult {
  QRList: QRList[] | undefined;
  isLoading: boolean;
  error: string | null;
}