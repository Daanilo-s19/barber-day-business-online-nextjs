import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 160px;
  background: #552ee5;
  border-radius: 10px;
  margin: 76px auto 132px;
  padding: 0 56px;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 3fr 5fr 1fr;
  column-gap: 24px;
  align-items: center;

  img {
    width: 0%;
    transition: 3s;
  }

  span {
    margin-top: 8px;
    font-size: 14px;
    line-height: 16px;
    opacity: 0.8;
  }
  &:hover {
    img {
      width: 100%;
      max-width: 502px;
    }
  }
  @media ${({ theme }) => theme.breakpoint.mobileL} {
    width: 296px;
    height: 380px;
    justify-items: center;
    border-radius: 10px;
    padding: 0;

    grid-template-columns: 1fr;
    grid-template-rows: 1fr 96px 1fr;

    img {
      max-width: 100px;
      transition: 3s;
      transform: rotate(90deg);
    }

    button {
      margin-top: 32px;
      align-self: center;
    }

    div {
      text-align: center;
    }
    h4 {
      font-size: 20px;
      line-height: 24px;
      width: 182px;
    }

    &:hover {
      img {
        width: 50%;
      }
    }
  }
`;
