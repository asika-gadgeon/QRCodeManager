import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Switch, Box } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import ProfileSidePanel from './components/ProfileSidePanel';
import App from './App';

const AppWithTheme: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          onMenuClick={() => setDrawerOpen(true)}
          rightContent={
            <Box display="flex" alignItems="center">
              <span style={{ marginRight: 8 }}>Dark Mode</span>
              <Switch checked={darkMode} onChange={() => setDarkMode((prev) => !prev)} />
            </Box>
          }
        />
        <ProfileSidePanel open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        <App />
      </ThemeProvider>
    </Router>
  );
};

export default AppWithTheme;
