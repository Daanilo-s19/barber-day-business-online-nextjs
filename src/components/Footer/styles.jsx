import styled from "styled-components";

export const BorderTop = styled.div`
  width: 100%;
  height: 1px;
  background: -webkit-linear-gradient(10.34deg, #552ee5 14.56%, #ee5a59 85.55%);
`;
export const Footerdefault = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  background: url("assets/filter_space.svg");

  display: grid;
  grid-auto-rows: auto;

  /* display: grid;
  grid-template-rows: 1px repeat(2, auto); */

  .header {
    display: grid;
    height: 204px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    grid-template-columns: repeat(2, 1fr);

    .content {
      justify-self: end;
      padding-top: 60px;
      display: grid;
      justify-items: end;
    }

    .content-menu {
      a {
        margin-left: 31px;
        font-size: 14px;
        line-height: 16px;
        color: #fff;
        opacity: 0.7;
        cursor: pointer;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
  .content-tag {
    margin-top: -25px;
    div {
      margin-right: 58px;
      width: 106px;
      height: 21px;
      background: rgba(85, 46, 229, 0.2);
      backdrop-filter: blur(10px);
      border-radius: 100px;

      font-weight: 500;
      font-size: 8px;
      line-height: 9px;
      text-align: center;
      padding: 6px;
    }
  }
  .copyright {
    height: 97px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      margin-left: 31px;
      font-size: 14px;
      line-height: 16px;
      opacity: 0.7;
    }
  }
  @media ${({ theme }) => theme.breakpoint.tablet} {
    .header {
      height: auto;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, auto);
      justify-items: center;

      #slogan {
        max-width: 500px;
        height: 170px;
      }

      .content {
        padding-top: 0;
        display: grid;
        justify-self: center;
        justify-items: center;
      }
      .content-menu {
        a {
          font-size: 10px;
        }
      }

      .content-tag {
        margin-top: 10px;
        margin-bottom: 20px;

        div {
          margin-right: 0;
        }
      }
    }
  }

  @media ${({ theme }) => theme.breakpoint.mobileL} {
    .header {
      #slogan {
        max-width: 296px;
        height: 170px;
      }
      .content {
        justify-self: start;
        justify-items: start;
      }
    }

    .content-menu {
      display: flex;
      flex-direction: column;
      a {
        margin: 0;
        margin-bottom: 20px;
      }
    }
    .content-tag {
      justify-self: start;
    }
    .copyright {
      height: 0;
      justify-self: center;
      display: flex;
      flex-direction: column;

      span {
        margin: 20px;
      }

      span:first-child {
        margin-top: 32px;
      }
    }
  }
`;
