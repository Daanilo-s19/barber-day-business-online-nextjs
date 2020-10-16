import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: minmax(auto, 123px) 1fr minmax(auto, 123px);

  @media ${({ theme }) => theme.breakpoint.mobileS} {
    grid-template-columns: 0 320px 0;
    .content-item {
      grid-template-columns: 320px;
    }
  }
`;
