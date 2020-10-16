import styled from "styled-components";

export const ItemService = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 352px;
  height: 273px;
  padding: 48px 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(20px);
  border-radius: 10px;
  transition: 300ms;

  strong {
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    margin: 33.5px 0 16px;
  }

  span {
    width: 100%;
    max-width: 256px;
    text-align: center;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    opacity: 0.6;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
  }
  @media ${({ theme }) => theme.breakpoint.mobileL} {
    max-width: 296px;
    height: 273px;
  }

  /* @media ${({ theme }) => theme.breakpoint.mobileS} {
    max-width: 236px;
    height: 213px;
  } */
`;
