import styled from "styled-components";

export const ItemPress = styled.div`
  max-width: 352px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  backdrop-filter: blur(20px);
  border-radius: 10px;
  cursor: pointer;

  .filter {
    width: 100%;
    height: 174px;
    background: ${({ theme }) => theme.colorsButton.primary};
    mix-blend-mode: normal;
    opacity: 0.4;
    border-radius: 10px 10px 0px 0px;
  }
  .content {
    padding: 24px;

    display: grid;
    grid-auto-flow: 1fr;
    row-gap: 16px;
    label {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
    }
    p {
      font-size: 12px;
      line-height: 14px;
      color: #ffffff;
      opacity: 0.6;
      margin-bottom: 24px;
    }
  }

  .content-image {
    width: 100%;
    /* max-width: 352px; */
    height: 174px;
    border-radius: 10px 10px 0px 0px;

    background: url(${(props) => props.assets}) 50% 50% no-repeat border-box;

    img {
      border-radius: 10px 10px 0px 0px;
      mix-blend-mode: normal;
      opacity: 0.8;
    }
  }

  @media ${({ theme }) => theme.breakpoint.mobileL} {
    width: 296px;
    height: auto;
  }
`;
