import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  max-width: 1366px;
  margin: 0 auto;

  grid-template-columns: minmax(auto, 123px) 1fr 1fr minmax(auto, 123px);
  .content {
    grid-column: 2/3;
  }
  @media ${({ theme }) => theme.breakpoint.mobileS} {
    grid-template-columns: 0 320px 0;
    .content-item {
      grid-template-columns: 320px;
    }
  }
`;
