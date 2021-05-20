import React from 'react';
import Navigation from '../Navigation';
import './style.css';
import { ThemeProvider } from 'styled-components';
import 'animate.css/animate.min.css';
import { Helmet } from 'react-helmet';

const theme = {
  color: {
    primary: 'rgb(52, 169, 161)',
    darker_primary: 'rgb(11, 111, 104)',
    grey: 'rgba(25, 25, 27, 0.75)',
    black: 'rgb(25, 25, 27)',
  },
};
const Layout = ({ children, footerColor = 'black', fixedFooter = false }) => {
  const footerStyle = fixedFooter ? { position: 'absolute', bottom: 0 } : {};
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Turn data into decisions</title>
      </Helmet>
      <Navigation />
      <div style={{ width: '100%', height: '100%', overflowX: 'hidden' }}>{children}</div>
      <div
        style={{
          height: 50,
          padding: '0 5vw',
          fontWeight: 300,
          background: theme.color[footerColor],
          ...footerStyle,
        }}
      >
        <div
          style={{
            borderTop: '1px solid rgba(220, 220, 220, 0.3)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            color: footerColor === 'black' ? 'white' : theme.color['grey'],
          }}
        >
          © 2021 ELWYN, All Rights Reserved
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
