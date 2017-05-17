import { injectGlobal } from 'styled-components';

export const fonts = injectGlobal`
  @font-face {
    font-family: 'icomoon';
    src:  url('http://localhost:3001/fonts/icomoon.eot?adfdgl');
    src:  url('./fonts/icomoon.eot?adfdgl#iefix') format('embedded-opentype'),
      url('http://localhost:3001/fonts/icomoon.ttf?adfdgl') format('truetype'),
      url('http://localhost:3001/fonts/icomoon.woff?adfdgl') format('woff'),
      url('http://localhost:3001/fonts/icomoon.svg?adfdgl#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-refresh:before {
    content: "\\e984";
  }
  .icon-github:before {
    content: "\\eab0";
  }
`;
