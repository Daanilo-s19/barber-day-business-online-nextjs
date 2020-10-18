import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 410px;
  background: RGBA(52, 58, 64, 0.4);
  margin: 140px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    grid-column: 2/3;
    max-width: 1366px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr minmax(auto, 554px);
    align-items: center;
  }
  .filter-gold {
    height: 100%;
    width: 100%;
    background: url('assets/stampbg.svg') center no-repeat;
    display: flex;
    justify-content: center;

    /* width: 100vw;
    height: 100vh;
    background: url('assets/stampbg.svg') 50% 50% no-repeat; */
  }
  #stamp {
    padding: 64px;
    align-self: center;
    justify-self: end;
  }
  .description {
    label {
      font-weight: normal;
      font-size: 28px;
      line-height: 125.1%;
      color: #ffffff;
      mix-blend-mode: normal;
    }
    b {
      font-weight: bold;
    }
    p {
      margin-top: 20px;

      font-size: 18px;
      line-height: 20px;
      color: #ffffff;
      opacity: 0.8;
    }
  }
  @media ${({ theme }) => theme.breakpoint.tablet} {
    height: auto;
    padding: 64px 0 80px;
    .content {
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
      justify-items: center;
    }

    /* #stamp { */
    /* width: 241px; */
    /* height: 218px; */
    /* padding: 0; */
    /* } */

    .description {
      label {
        max-width: 309px;
        text-align: center;
      }

      p {
        width: 309px;
        text-align: center;
      }
    }
  }
  @media ${({ theme }) => theme.breakpoint.mobileL} {
    max-width: 425px;
  }

  @media ${({ theme }) => theme.breakpoint.mobileS} {
    #stamp {
      padding: 64px 0;
    }

    .description {
      /* width: 320px; */
      display: flex;
      flex-direction: column;

      label {
        font-size: 20px;
      }

      p {
        padding: 0 16px;
        font-size: 16px;
      }
    }
  }
`
