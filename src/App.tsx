import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { Global } from '@emotion/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import { globalStyles } from './styles/GlobalStyle';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3498db',
    },
    secondary: {
      main: '#2ecc71',
    },
    background: {
      default: '#f0f0f0',
    },
  },
  typography: {
    fontFamily: '"Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 