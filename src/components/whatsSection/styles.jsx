import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: auto;

  .polygon-left {
    width: auto;
    height: auto;
    background: url('assets/Esquerda-inferior.svg') no-repeat;
  }
  .polygon-right {
    width: auto;
    height: auto;
    background: url('assets/Direita-inferior.svg') 100% 0% no-repeat;
  }

  @media ${({ theme }) => theme.breakpoint.mobileS} {
    grid-template-columns: 0 320px 0;
    .content-item {
      grid-template-columns: 320px;
    }
  }
`

export const Content = styled.section`
  display: grid;
  max-width: 1366px;
  margin: 0 auto;
  padding-top: 121px;

  grid-template-columns: minmax(auto, 126px) 1fr 1fr minmax(auto, 126px);

  .whats-content {
    grid-column: 2/3;

    span {
      font-size: 18px;
      line-height: 20px;
      opacity: 0.8;
      /* margin-bottom: 24px; */
    }
    button {
      margin-top: 15px;
    }
  }

  .image-phone {
    width: 554.52px;
    height: 334.62px;

    background: url('assets/PixelBookGo.svg') no-repeat;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    img {
      margin-right: -30px;
    }
  }

  @media ${({ theme }) => theme.breakpoint.tablet} {
    grid-template-columns: minmax(auto, 126px) 1fr minmax(auto, 126px);
    .image-phone {
      justify-self: end;
      align-self: end;
      max-width: 425px;
      height: 176px;

      /*  */
      background: url('assets/PixelBookGo-small.svg') center no-repeat;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      img {
        margin-left: 200px;
        width: 64.49px;
        height: 114.01px;
      }
    }

    h4 {
      margin: 8px 0 20px;
    }
  }
  @media ${({ theme }) => theme.breakpoint.mobileL} {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      grid-column: 2/3;
      grid-row: 3/4;
    }
    h4 {
      max-width: 169px;
    }
    .whats-content {
      max-width: 425px;
      padding: 0 24px;
      grid-column: 2/3;
      grid-row: 1/2;

      span {
        font-size: 18px;
        line-height: 20px;
        opacity: 0.8;
        margin-bottom: 24px;
      }
    }
    .image-phone {
      max-width: 425px;
      height: 176px;

      grid-column: 2/3;
      grid-row: 2/3;
      margin-bottom: 49px;
      img {
        margin-left: 200px;
        width: 64.49px;
        height: 114.01px;
      }
    }
  }
  @media ${({ theme }) => theme.breakpoint.mobileM} {
    max-width: 320px;
    .whats-content {
      width: 320px;
    }
    .image-phone {
      width: 320px;
    }
  }
  @media ${({ theme }) => theme.breakpoint.mobileS} {
    max-width: 320px;
    .whats-content {
      width: 320px;
    }
    .image-phone {
      width: 320px;
    }
  }
`
