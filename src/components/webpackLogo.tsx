import { css } from '@emotion/react';

import WebpackLogoIcon from '../images/webpack-logo.svg';

function WebpackLogo(): React.ReactElement {
  return (
    <WebpackLogoIcon
      css={css`
        width: 50vw;
      `}
    />
  );
}

export default WebpackLogo;