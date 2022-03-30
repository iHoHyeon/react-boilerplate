import { css } from '@emotion/react';

import WebpackLogoIcon from '../images/webpackLogo.svg';

function WebpackLogo() {
  return (
    <WebpackLogoIcon
      css={css`
        width: 50vw;
      `}
    />
  );
}

export default WebpackLogo;
