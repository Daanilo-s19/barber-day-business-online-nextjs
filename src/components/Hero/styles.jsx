import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  margin-top: 40px;

  h1 {
    width: 100%;
    max-width: 296px;
    text-align: center;
    font-weight: 600;
    font-size: 28px;
    line-height: 30px;
  }

  .custom-bottom {
    width: 100%;
    max-width: 296px;
    margin-top: -3px;
    margin-bottom: 34px;
    display: grid;
    grid-template-columns: minmax(auto, 36px) minmax(auto, 16px) minmax(
        auto,
        238px
      );
    #disabled-color {
      background: none;
    }
    div {
      width: 100%;
      height: 2px;
      background: #2a9e98;
    }
  }

  .dash {
    width: 100%;
    max-width: 584px;
    height: 342px;
    border-radius: 12px;
    border: 1px #58c4b5 dashed;
    margin-bottom: 32px;

    display: flex;
    align-items: center;
    justify-content: center;
    iframe {
      border-radius: 12px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .polygon-left {
    width: auto;
    height: auto;
    background: url('assets/Esquerda-hero.svg') 0% 100% no-repeat;
    animation: opacityContainer 1500ms linear;
  }
  .polygon-right {
    width: auto;
    height: auto;
    background: url('assets/Direita- Hero.svg') 100% 100% no-repeat;
    animation: opacityContainer 1500ms linear;
  }

  .arrow-down {
    width: 2px;
    height: 44px;
    margin-top: 24px;

    background: linear-gradient(180deg, rgba(42, 158, 152, 0) 0%, #2a9e98 100%);
    border-radius: 100px;
  }

  /* .play {
    cursor: pointer;
    position: relative;
    width: 100%;
    max-width: 96px;
    height: 96px;
    box-shadow: 0px 5px 60px rgba(32, 44, 61, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background: linear-gradient(40.72deg, #552ee5 14.56%, #ee5a59 85.55%);
      animation: spinoff 10s linear infinite;
      border-radius: 50%;
      z-index: -1;
    }

    &:hover {
      background: linear-gradient(40.72deg, #552ee5 14.56%, #ee5a59 85.55%);
      max-width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  } */

  @media ${({ theme }) => theme.breakpoint.mobileL} {
    .dash {
      width: 340px;
      height: 191px;
      padding: 10px;
      iframe {
        width: 100%;
        height: 100%;
      }
      button {
        width: 312px;
      }
    }
    h1 {
      max-width: 254px;
      font-weight: 600;
      font-size: 24px;
      line-height: 26px;
    }
    h2 {
      width: 296px;
      font-size: 14px;
      line-height: 16px;
    }
  }
  @media ${({ theme }) => theme.breakpoint.mobileS} {
    .dash {
      width: 300px;
      padding: 5px;
    }
    button {
      width: 300px;
    }
  }
`
