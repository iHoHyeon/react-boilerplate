import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    mainColor: string;
    mediaQuery: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
