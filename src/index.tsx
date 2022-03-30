import { ThemeProvider } from '@emotion/react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
