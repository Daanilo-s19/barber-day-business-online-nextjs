import styled from "styled-components";

export const SocialMediaDefault = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 40px);
  column-gap: 20px;
  margin-bottom: 12px;
  a {
    width: 100%;
    max-width: 40px;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.background.secundary};
      border: 1px solid rgba(255, 255, 255, 1);
    }
  }

  @media ${({ theme }) => theme.breakpoint.mobileL} {
    grid-template-columns: repeat(6, 40px);
  }

  @media ${({ theme }) => theme.breakpoint.mobileS} {
    grid-template-columns: repeat(4, 40px);
  }
`;
