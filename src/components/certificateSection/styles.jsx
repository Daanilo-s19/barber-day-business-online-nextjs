import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1366px;
  display: grid;
  margin: 0 auto;
  padding-top: 192px;
  grid-template-columns: repeat(3, 1fr);
  background: url('assets/bonusbg.svg') center 35% no-repeat;
  /* animation: opacity 3s infinite alternate; */

  .max-header {
    width: 525px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      font-family: Archivo;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      text-align: center;
      margin-bottom: 4px;
      margin-bottom: 100px;
    }
  }
  .texture-left {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: start;
    img {
      width: 75%;
      animation: go-back 1500ms infinite alternate;
      animation-delay: 400ms;

      &:last-child {
        animation-delay: 800ms;
      }
    }
  }

  .texture-right {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: end;
    img {
      width: 75%;
      animation: go-back 1500ms infinite alternate;
      animation-delay: 1200ms;

      &:last-child {
        animation-delay: 1600ms;
      }
    }
  }
  .content-center {
    justify-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 286px;
    img {
      animation: go-back 3s infinite alternate;
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
      padding-bottom: 0px;

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
