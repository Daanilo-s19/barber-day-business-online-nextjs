import styled from "styled-components";

export const Carousel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  .view-controller {
    display: flex;
    align-items: center;

    .dot {
      width: 6px;
      height: 6px;
      background: rgba(255, 255, 255, 0.3);
      margin-right: 8px;
      border-radius: 50%;
    }
    .dot-selected {
      width: 36px;
      height: 6px;
      margin-right: 8px;
      background: linear-gradient(40.72deg, #2a9e98 14.56%, #7ee1cb 85.55%);
      border-radius: 100px;
    }

    span {
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.12em;
    }
    img {
      margin: 0 8px;
    }
  }

  .controllers {
    display: flex;
    div {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.02);
      backdrop-filter: blur(10px);
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        background: rgba(255, 255, 255, 0.08);
      }

      &:first-child {
        margin-right: 24px;
      }
    }
  }
  @media ${({ theme }) => theme.breakpoint.mobileL} {
    padding: 0 32px;
  }
`;
