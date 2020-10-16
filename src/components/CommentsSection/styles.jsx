import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  max-width: 736px;
  height: 208px;
  margin: 56px auto 132px;
  background: url("assets/filter_space.svg");

  display: grid;
  grid-auto-flow: 1fr;
  row-gap: 24px;

  .comments {
    width: 100%;
    background: rgba(239, 179, 139, 0.7);
    box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 10px;
    padding: 48px 48px 10px;

    display: grid;
    grid-auto-flow: 1fr;
    row-gap: 43px;

    p {
      max-width: 480px;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
      opacity: 0.8;
    }
    .legends {
      display: flex;
      align-items: center;

      .circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;

        img {
          border-radius: 50%;
          width: 36px;
          height: 36px;
        }
      }

      div {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
      }
      label {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 5px;
      }
      span {
        font-size: 8px;
        line-height: 9px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        opacity: 0.8;
      }
    }
  }

  @media ${({ theme }) => theme.breakpoint.mobileL} {
    .comments {
      border-radius: 0;
    }
  }
`;
