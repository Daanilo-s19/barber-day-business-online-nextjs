import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  z-index: 99;

  .max-header {
    width: 100%;
    max-width: 544px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      text-align: center;
      margin-bottom: 72px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      margin-top: 88px;
    }
  }

  .item-dropdown {
    width: 736px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: auto;
    border-radius: 12px;
    background: #fff;
    margin-bottom: 12px;
    padding: 23px 0 0px;
    grid-template-rows: 40px;
    cursor: pointer;

    img {
      justify-self: end;
      margin-right: 25px;
      grid-column: 2/3;
      grid-row: 1/2;
      margin-bottom: 25px;
    }
    p {
      margin-left: 24px;

      grid-column: 1/2;
      grid-row: 1/2;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      text-transform: lowercase;
      color: #343a40;
      mix-blend-mode: normal;
    }
  }

  .description {
    grid-column: 1/3;
    grid-row: 2/3;
    background: #f8f9fa;
    border-radius: 0 0 12px 12px;
    padding: 16px 24px 24px;
    animation: opacity 300ms normal;

    span {
      font-size: 16px;
      line-height: 23px;
      color: #5e6770;
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

  @media ${({ theme }) => theme.breakpoint.mobileL} {
    max-width: 768px;
    padding: 0 24px;

    .item-dropdown {
      width: 100%;
      min-height: 70px;
      grid-template-rows: auto;
      grid-template-columns: 2fr 1fr;

      .description {
        /* max-width: 768px; */
      }
    }
  }
`
