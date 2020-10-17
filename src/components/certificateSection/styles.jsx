import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1366px;
  display: grid;
  margin: 0 auto;
  padding-top: 192px;
  grid-template-columns: repeat(3, 1fr);
  background: url('assets/background/bonus.svg') center 35% no-repeat;
  /* animation: opacity 3s infinite alternate; */

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
  .texture-left {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: start;
  }

  .texture-right {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: end;
  }
  .content-center {
    justify-self: center;
    img {
      /* animation: go-back 3s infinite alternate; */
    }
  }

  @keyframes go-back {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(20px);
    }
  }
  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media ${({ theme }) => theme.breakpoint.tablet} {
    max-width: 768px;
    grid-template-columns: 1fr;
    justify-content: center;
    margin: 0;

    .texture-left {
      display: none;
    }
    .texture-right {
      display: none;
    }
  }

  @media ${({ theme }) => theme.breakpoint.mobileL} {
    max-width: 425px;
    padding-top: 89px;

    height: auto;
    background: none;
    /* background-size: 100% 100%;
    background-position: top;
    grid-template-columns: 1fr; */
    .max-header {
      width: 325px;
    }

    .content-center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h4 {
        margin-bottom: 59px;
        font-size: 18px;
      }
      img {
        width: 240px;
        height: 212px;
      }
    }
  }

  @media ${({ theme }) => theme.breakpoint.mobileS} {
    width: 320px;

    .max-header {
      width: 300px;
    }
  }
`
