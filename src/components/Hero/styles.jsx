import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 768px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
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

  #polygon1 {
    width: 100%;
    height: 720px;
    -z-index: -99;
    margin-top: -150px;
    margin-left: 135px;

    background: linear-gradient(
      180deg,
      #156671 0%,
      rgba(8, 55, 75, 0) 57.78%,
      rgba(3, 22, 31, 0) 57.78%
    );
    transform: matrix(0.87, -0.5, -0.5, -0.87, 0, 0);
    /* -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg); */
  }
  #polygon2 {
    width: 100%;
    height: 720px;
    margin-top: -150px;
    margin-left: -135px;
    background: linear-gradient(
      180deg,
      #156671 0%,
      rgba(8, 55, 75, 0) 57.78%,
      rgba(3, 22, 31, 0) 57.78%
    );
    transform: rotate(-150deg);
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
    h1 {
      width: 304px;
      font-size: 20px;
      line-height: 24px;
    }
    h2 {
      width: 296px;
      font-size: 14px;
      line-height: 16px;
    }
  }
`;