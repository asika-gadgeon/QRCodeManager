import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  onMenuClick: () => void;
  rightContent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, rightContent }) => (
  <AppBar position="static" sx={{
    width: '100%', // Use 100% instead of 100vw to avoid overflow
    left: 0,
    backgroundColor: '#fff',
    color: '#222',
    boxShadow: 'none',
    overflowX: 'hidden', // Prevent horizontal scroll
  }}>
    <Toolbar sx={{ minHeight: 64, px: 2 }}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={onMenuClick}
        sx={{ mr: 2, alignSelf: 'flex-start' }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        SVP QR
      </Typography>
      <Box>{rightContent}</Box>
    </Toolbar>
  </AppBar>
);

export default Header;
