import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: auto;

  .polygon-left {
    width: auto;
    height: auto;
    background: url("assets/background/Esquerda-inferior.svg") no-repeat;
  }
  .polygon-right {
    width: auto;
    height: auto;
    background: url("assets/background/Direita-inferior.svg") 100% 0% no-repeat;
  }

  @media ${({ theme }) => theme.breakpoint.mobileS} {
    grid-template-columns: 0 320px 0;
    .content-item {
      grid-template-columns: 320px;
    }
  }
`;

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
    background: url("assets/background/PixelBookGo.svg") no-repeat;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    img {
      margin-right: -30px;
    }
  }
`;
