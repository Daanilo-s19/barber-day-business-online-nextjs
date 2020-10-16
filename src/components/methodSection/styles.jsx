import styled from "styled-components";

export const Section = styled.section`
  max-width: 1366px;
  margin: 174px auto 0px;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 56px;

  .content-header {
    display: grid;
    grid-template-columns: minmax(auto, 155px) 1.5fr 2fr minmax(auto, 155px);

    .title {
      grid-column: 2/3;
      max-width: 427px;
      h4 {
        font-weight: normal;
        font-size: 24px;
        line-height: 125%;
        b {
          font-weight: bold;
        }
      }
    }
    .border {
      align-self: end;
      justify-self: end;
      span {
        font-size: 18px;
        line-height: 20px;
        opacity: 0.8;
      }
    }
  }

  .content-item {
    grid-row: 2/3;
    display: grid;
    grid-template-columns: minmax(auto, 123px) 1fr minmax(auto, 123px);

    .content-alignment-flex {
      grid-column: 2/3;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .content-alignment-responsive {
      display: none;
    }
  }

  @media ${({ theme }) => theme.breakpoint.tablet} {
    .content-item {
      .content-alignment-flex {
        display: none;
      }

      .content-alignment-responsive {
        grid-column: 2/3;
        display: grid;
        grid-template-rows: repeat(3, 1fr);

        justify-items: center;

        .align-top-left {
          grid-column: 1/2;
        }
        .align-top-center {
          grid-column: 2/3;
        }
        .align-top-right {
          grid-column: 3/4;
        }
      }
    }
    .content-header {
      margin: 0 32px;
      display: grid;
      grid-template-columns: minmax(auto, 32px) 1fr minmax(auto, 32px);
      grid-template-rows: repeat(2, 1fr);

      .title {
        width: 100%;
        h4 {
          width: 296px;
        }
      }

      .border {
        grid-column: 2/3;
        grid-row: 2/3;
      }
    }
  }
  @media ${({ theme }) => theme.breakpoint.modileS} {
    .content-item {
      .content-alignment-responsive {
        grid-template-rows: repeat(3, 84px);
      }
    }
    .content-header {
      margin: 0;
    }
  }

  /* @media ${({ theme }) => theme.breakpoint.mobileL} {
    justify-items: center;

    max-width: 375px;
    .content-header {
      margin: 0;
      justify-self: center;
      grid-template-columns: 0 296px 0;

      .border {
        width: 296px;

        img {
          width: 100%;
        }
      }
    }
    .content-item {
      grid-template-columns: 0 296px 0;

      .content-alignment-responsive {
      }
    }
  } */
`;

export const Item = styled.div`
  width: 352px;
  height: 235px;
  background: #343a40;
  border-radius: 12px;
  margin-bottom: 32px;
  padding: 33px 32px;

  display: flex;
  flex-direction: column;

  .content-header {
    display: flex;

    .box-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(40.72deg, #2a9e98 14.56%, #7ee1cb 85.55%);
      border-radius: 50%;
      margin: 0 24px 24px 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .title-header {
      display: flex;
      flex-direction: column;
    }
    #module {
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;
      font-variant: small-caps;
      background: -webkit-linear-gradient(
        40.72deg,
        #2a9e98 14.56%,
        #7ee1cb 85.55%
      );

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    #nameModule {
      font-weight: 600;
      font-size: 18px;
      line-height: 20px;
      margin-top: 4px;
    }
  }
  span {
    font-size: 16px;
    line-height: 20px;
    opacity: 0.8;
  }

  @media ${({ theme }) => theme.breakpoint.mobileL} {
    width: 86px;
    height: 86px;

    .circle {
      width: 84px;
      height: 84px;
    }

    #years {
      font-size: 8px;
      line-height: 9px;
    }

    .local {
      font-size: 9px;
      line-height: 11px;
    }
    .fontSize {
      font-size: 5 px;
    }
    #awards {
      font-size: 8px;
      line-height: 9px;
    }
  }
  @media ${({ theme }) => theme.breakpoint.mobileS} {
    width: 66px;
    height: 66px;

    .circle {
      width: 64px;
      height: 64px;
    }

    #years {
      font-size: 5px;
      line-height: 6px;
    }

    .local {
      font-size: 5px;
      line-height: 6px;
    }
    .fontSize {
      font-size: 5 px;
    }
    #awards {
      font-size: 5px;
      line-height: 6px;
    }
  }
`;
