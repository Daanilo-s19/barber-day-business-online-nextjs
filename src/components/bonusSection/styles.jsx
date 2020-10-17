import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1118px;
  height: 391px;
  margin: 108px auto 0px;
  background: linear-gradient(40.72deg, #2a9e98 14.56%, #7ee1cb 85.55%);
  border-radius: 300px 20px 124px 300px;
  padding: 0 94px 40px 40px;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 20px;
  column-gap: 94px;
  align-items: center;

  #player {
    margin-top: -60px;
  }
  .content {
    label {
      font-weight: bold;
      font-size: 24px;
      line-height: 125.1%;
      display: flex;
      align-items: center;
      color: #08374b;
      mix-blend-mode: normal;
      margin: 28px 0 12px 0;
    }
    b {
      font-weight: bold;
    }
    p {
      font-weight: 300;
      font-size: 18px;
      line-height: 20px;
      color: #08374b;
      margin-bottom: 28px;
    }
    p:last-child {
      margin: 0;
    }
  }
  button {
    grid-column: 2/3;
    align-self: end;
    justify-self: end;
  }

  @media ${({ theme }) => theme.breakpoint.tablet} {
    max-width: 768px;
    column-gap: 54px;

    label {
      font-size: 24px;
    }

    p {
      font-size: 18px;
    }
  }

  @media ${({ theme }) => theme.breakpoint.mobileL} {
    height: 816px;
    background: linear-gradient(40.72deg, #2a9e98 14.56%, #7ee1cb 85.55%);
    border-radius: 300px 300px 20px 20px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    row-gap: 0;
    column-gap: 0;
    padding: 0;
    margin: 115px auto 0;
    /* height: auto;
    margin: 108px auto 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     */

    #player {
      grid-row: 1/2;
      grid-column: 1/3;
      justify-self: center;
      width: 281px;
      height: 365px;
    }
    .content {
      grid-row: 2/3;
      grid-column: 1/3;

      grid-row: 2/3;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        margin: 0;
      }
      label {
        margin-bottom: 12px;
        text-align: center;
        width: 272px;
      }
      p {
        font-size: 18px;
        text-align: center;
        margin-bottom: 28px;
        padding: 0 24px;
      }
    }
    button {
      width: 100%;
      grid-row: 3/4;
      grid-column: 1/3;
      justify-self: center;
      margin-bottom: -20px;
    }
  } ;
`
