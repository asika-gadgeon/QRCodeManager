import React from 'react';
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ProfileSidePanelProps {
  open: boolean;
  onClose: () => void;
}

const ProfileSidePanel: React.FC<ProfileSidePanelProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      PaperProps={{
        sx: {
          width: 250,
          backgroundColor: 'rgb(117 62 124 / var(--tw-bg-opacity, 1))',
          color: '#fff',
          height: '100vh',
          overflow: 'auto',
        },
      }}
    >
      <Box role="presentation">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => { navigate('/dashboard'); onClose(); }}>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default ProfileSidePanel;
