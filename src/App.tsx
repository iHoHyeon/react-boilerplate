import { css } from '@emotion/react';
import { Suspense, lazy } from 'react';

const WebpackLogo = lazy(() => import('@/components/webpackLogo'));

function App() {
  return (
    <div
      css={css`
        width: max-content;
        margin: auto;
      `}
    >
      <Suspense fallback={'loading...'}>
        <WebpackLogo />
      </Suspense>
      <h1>hello react</h1>
      <h1>mode: {process.env.NODE_ENV}</h1>
    </div>
  );
}

export default App;
