import styled from "styled-components";
export const Content = styled.div`
  width: 100%;
  margin-top: -140px;
  padding: 0 123px;
  display: grid;
  grid-auto-rows: auto;

  .content-web {
    display: block;
  }
  .content-mobile {
    display: none;
  }

  @media ${({ theme }) => theme.breakpoint.tablet} {
    .content-web {
      display: none;
    }
    .content-mobile {
      display: block;
    }
  }
  @media ${({ theme }) => theme.breakpoint.mobileL} {
    max-width: 425px;
    padding: 0;
    .content-mobile {
      max-width: 425px;
      flex-direction: column;
      margin: 0 auto;
      display: flex;

      button {
        /* width: 100%; */
      }
    }
  }
`;

export const ItemPress = styled.div`
  max-width: 352px;
  cursor: pointer;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      font-family: Archivo;
      font-weight: bold;
      font-size: 18px;
      line-height: 125.1%;
      margin: 24px 0 4px;
    }
    p {
      font-family: Archivo;
      font-size: 16px;
      line-height: 125.1%;
      text-align: center;
      mix-blend-mode: normal;
      opacity: 0.8;
    }
  }

  .content-video {
    width: 100%;
    height: 198px;

    iframe {
      border-radius: 12px;
    }
  }

  @media ${({ theme }) => theme.breakpoint.tablet} {
    .content {
      p {
        margin: 0;
      }
    }
  }

  @media ${({ theme }) => theme.breakpoint.mobileS} {
    .content-video {
      iframe {
        max-width: 300px;
      }
    }
  }
`;
