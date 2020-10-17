import styled, { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    primary: '#ee5a59',
    secundary: '#C7DEFF',
    third: 'linear-gradient(40.72deg, #552EE5 14.56%, #EE5A59 85.55%);',
  },
  colorsButton: {
    primary: '#552ee5',
    secundary: '#552ee5',
    // third: "linear-gradient(40.72deg, #552EE5 14.56%, #EE5A59 85.55%);",
  },
  background: {
    primary: '#0D151D',
    secundary: '#161041',
    // third: "linear-gradient(40.72deg, #552EE5 14.56%, #EE5A59 85.55%);",
  },
  breakpoint: {
    mobileS: '(max-width: 320px)',
    mobileM: '(max-width: 375px)',
    mobileL: '(max-width: 425px)',
    tablet: '(max-width: 768px)',
    laptop: '(max-width: 1024px)',
    laptopL: '(max-width: 1440px)',
    desktop: '(max-width: 2560px)',
  },
}

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  outline: none;
  box-sizing: border-box;
}
button{
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  cursor:pointer;

}
a:link {
    font-weight: normal;
    text-decoration: none;
    color: #fff;
}
ul,
li {
  list-style: none;
}
html,
body {
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background: ${({ theme }) => theme.background.primary};
  font-family: 'Archivo', sans-serif;
  /* font-family: 'Hind', sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  font-size:16px;
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

`
export const Container = styled.div`
  width: 100%;
  height: 100vh;

  /* background: red; */
  background: url('assets/background/Seu-Elias.svg');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  background-attachment: fixed;
  animation: opacityContainer 500ms linear;
  /* overflow: hidden; */

  .filter {
    width: 100%;
    height: 100vh;
    background: RGBA(13, 21, 29, 0.81);
  }

  .content-center-header {
    display: grid;
    grid-auto-columns: auto;
  }
  .header-center-default {
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 72px;

    h5 {
      margin-top: 148px;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 8px;
      color: #fff;
    }
  }
  h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    display: flex;
    align-items: center;
    text-align: center;
    font-variant: small-caps;
    background: -webkit-linear-gradient(
      40.72deg,
      #2a9e98 14.56%,
      #7ee1cb 85.55%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h4 {
    width: 100%;
    font-weight: bold;
    font-size: 24px;
    line-height: 125.1%;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes spinoff {
    to {
      transform: rotate(-360deg);
    }
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes antiRotation {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  @keyframes opacityContainer {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media ${({ theme }) => theme.breakpoint.mobileL} {
    margin: 0;

    h3 {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }
    h4 {
      font-size: 20px;
    }
  }
  /* background: blue; */
`
