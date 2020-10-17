import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  .max-header {
    width: 100%;
    max-width: 544px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      text-align: center;
      margin-bottom: 100px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* animation: go-back 3000ms infinite alternate; */
  }

  .descripiton {
    width: 100%;
    max-width: 736px;
    height: 502px;
    background: #ffffff;
    border-radius: 40px;
    display: grid;
    grid-auto-rows: auto;
    padding-top: 18px;

    .bonus {
      display: flex;
      justify-content: center;
      margin: 24px 0;
      span {
        font-size: 16px;
        line-height: 20px;
        text-align: center;

        /* Brand/02 */

        color: #08374b;
      }
    }

    .total {
      max-width: 279px;
      margin: 0 auto 24px;
      height: 62px;
      background: RGBA(42, 158, 152, 0.1);
      border-radius: 12px;
      padding: 16px 20px 17px 24px;
      display: grid;
      grid-template-columns: 1fr 2fr;
      label {
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        color: #08374b;
        mix-blend-mode: normal;
      }
    }

    .item {
      font-size: 14px;
      line-height: 17px;
      color: #5e6770;
      mix-blend-mode: normal;
      display: grid;
      grid-template-columns: 5fr auto;
      column-gap: 107px;
      padding: 18px 24px 17px;
    }
    .item-zebra {
      background: #f8f9fa;
    }
    .decoration {
      text-decoration: line-through red;
    }
  }
  .span {
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #ffffff;

    b {
      color: #ffffff;
    }
  }

  .price {
    width: 544px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    background: linear-gradient(
      40.72deg,
      #2a9e98 14.56%,
      RGBA(126, 225, 203, 0.7) 85.55%
    );
    border-radius: 0 0 80px 80px;

    button {
      margin-top: 40px;
      margin-bottom: -10px;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      text-transform: uppercase;
      margin: 40px 0 8px;
    }
    label {
      font-size: 24px;
      line-height: 26px;
      text-align: center;
    }
    b {
      font-weight: bold;
      color: #ffffff;
    }
  }
  span {
    font-size: 14px;
    line-height: 17px;
    color: #5e6770;
  }
  b {
    color: #08374b;
    font-weight: bold;
  }

  @media ${({ theme }) => theme.breakpoint.tablet} {
    max-width: 768px;
    .max-header {
      max-width: 312px;
      h4 {
        margin: 96px 0 48px;
      }
    }
    .descripiton {
      max-width: 80%;
      display: flex;
      flex-direction: column;
      border-radius: 40px;
      z-index: 999;
      height: 826px;

      .item {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 12px;
        span {
          text-align: center;
        }
        b {
          text-align: center;
        }
      }
      .bonus {
      }
    }
    .price {
      margin-top: -40px;
      padding-top: 40px;
      max-width: 312px;
      z-index: -99px;
      border-radius: 20px;

      button {
        margin-top: 40px;
        width: 312px;
      }
    }
    .span {
      max-width: 300px;
    }
  }

  @media ${({ theme }) => theme.breakpoint.mobileM} {
    width: 320px;
    .descripiton {
      max-width: 100%;
    }
    .price {
      max-width: 310px;
      z-index: -99px;

      button {
        margin-top: 40px;
        width: 300px;
      }
    }

    .max-header {
      width: 300px;
    }
  }
`
