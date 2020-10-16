import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  /* height: 88px; */
  display: grid;
  grid-template-columns: auto minmax(auto, 1366px) auto;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.1); */
  /* background: ${({ theme }) => theme.background.primary}; */
  padding-top: 27px;
  /* position: fixed;
  z-index: 999;
  top: 0;
  */
  .content {
    grid-column: 2/3;
    display: grid;
    grid-template-columns: minmax(auto, 155px) auto 3fr minmax(auto, 155px);
  }

  .content-logo {
    grid-column: 2/3;
    align-self: center;

    img {
      width: 64px;
      height: 85px;
    }
  }
  .content-countdown {
    /* GRID */
    justify-self: center;
    align-self: center;
    /* FLEX */
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      margin-bottom: 20px;
      margin-left: -20px;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      text-transform: uppercase;
      background: -webkit-linear-gradient(
        40.72deg,
        #2a9e98 14.56%,
        #7ee1cb 85.55%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .countdown {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 88px;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h4 {
        font-weight: 600;
        font-size: 24px;
        line-height: 26px;
        display: flex;
        align-items: center;
        text-align: center;
      }
      span {
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        font-variant: small-caps;
        text-transform: uppercase;
        opacity: 0.6;
      }
    }
  }

  @media ${({ theme }) => theme.breakpoint.tablet} {
    .content-menu {
      display: none;
    }
    .content-menu-responsive {
      display: block;
      justify-self: end;
      align-self: center;
    }
  }
  @media ${({ theme }) => theme.breakpoint.tablet} {
    .content {
      grid-template-columns: 32px 1fr 3fr 32px;
    }
  }
`;
