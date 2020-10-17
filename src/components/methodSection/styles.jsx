import styled from 'styled-components'

export const Section = styled.section`
  max-width: 1366px;
  margin: 174px auto 0px;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 56px;

  .content-header {
    display: grid;
    grid-template-columns: minmax(auto, 123px) 1.5fr 2fr minmax(auto, 123px);

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
    .content-header {
      grid-template-columns: minmax(auto, 123px) 1fr minmax(auto, 123px);
      grid-template-rows: repeat(2, 1fr);

      .title {
        grid-column: 2/3;
        grid-row: 1/2;
      }
      .border {
        grid-column: 2/3;
        grid-row: 2/3;
        align-self: center;
        justify-self: start;
      }
    }
  }
  @media ${({ theme }) => theme.breakpoint.mobileL} {
    .content-header {
      grid-template-columns: 32px minmax(auto, 425px) 32px;

      .title {
        grid-column: 2/3;
        grid-row: 1/2;
        h3 {
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
        }
        h4 {
          font-weight: 600;
          font-size: 20px;
          line-height: 125%;
        }
      }
      .border {
        grid-column: 2/3;
        grid-row: 2/3;
        align-self: center;
        justify-self: start;
      }
    }
  }
`

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
    /* .box-icon {
      margin: 0;
    } */
  }
  @media ${({ theme }) => theme.breakpoint.mobileS} {
    width: 312px;
    height: 248px;
  }
`
