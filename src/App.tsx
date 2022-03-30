import { css } from '@emotion/react';
import { Suspense, lazy } from 'react';

import theme from './styles/theme';

const WebpackLogo = lazy(() => import('@components/WebpackLogo'));

function App() {
  return (
    <div
      css={css`
        width: max-content;
        margin: auto;
        background-color: ${theme.mainColor};

        ${theme.mediaQuery.mobile} {
          background-color: #000;
        }

        ${theme.mediaQuery.tablet} {
          background-color: gray;
        }
      `}
    >
      <Suspense fallback={'loading...'}>
        <WebpackLogo />
        <h1>hello react</h1>
        <h1>mode: {process.env.NODE_ENV}</h1>
      </Suspense>
    </div>
  );
}

export default App;
