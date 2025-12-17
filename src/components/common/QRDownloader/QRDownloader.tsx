import React, { useMemo } from 'react';
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardActions,
  Typography,
  Container,
  Paper,
} from '@mui/material';
import {
  Download as DownloadIcon,
} from '@mui/icons-material';

interface QRCodeDownloaderProps {
  base64Data: string;
  filename?: string;
  title?: string;
  subtitle?: string;
}

const QRCodeDownloader: React.FC<QRCodeDownloaderProps> = ({
  base64Data,
  filename = 'qrcode.png',
  title = 'QR Code',
  subtitle = 'Your QR code is ready to download',
}) => {
  const imageData = useMemo(() => {
    if (!base64Data) return '';
    
    // If already has data URI prefix, return as is
    if (base64Data.startsWith('data:')) {
      return base64Data;
    }
    
    // Add data URI prefix for image display
    return `data:image/png;base64,${base64Data}`;
  }, [base64Data]);

  const downloadQRCode = () => {
    if (!imageData) return;

    const link = document.createElement('a');
    link.href = imageData;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!base64Data) {
    return null;
  }

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          {title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 4 }}>
          {subtitle}
        </Typography>

        <Card elevation={2}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            bgcolor: 'grey.100',
            p: 3,
          }}>
            <CardMedia
              component="img"
              image={imageData}
              alt="QR Code"
              sx={{
                maxWidth: 300,
                maxHeight: 300,
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>

          <CardActions sx={{ justifyContent: 'center', p: 2 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<DownloadIcon />}
              onClick={downloadQRCode}
              size="large"
            >
              Download QR Code
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </Container>
  );
};

export default QRCodeDownloader;