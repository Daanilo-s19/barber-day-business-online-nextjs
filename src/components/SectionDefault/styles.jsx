import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: minmax(auto, 123px) 1fr minmax(auto, 123px);
  margin: 56px 0 181px;
  background: url("assets/filter_space.svg");

  .content-item {
    grid-column: 2/3;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 36px;
  }

  .content-web {
    display: block;
  }
  .content-mobile {
    display: none;
  }

  @media ${({ theme }) => theme.breakpoint.tablet} {
    grid-template-columns: 32px 1fr 32px;
    .content-item {
      grid-column: 2/3;
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      row-gap: 36px;
    }
    .content-web {
      display: none;
    }
    .content-mobile {
      display: block;
    }
  }
  @media ${({ theme }) => theme.breakpoint.tablet} {
    grid-template-columns: 0 100% 0;
    .content-item {
      grid-template-columns: 1fr;
    }
  }
  @media ${({ theme }) => theme.breakpoint.mobileS} {
    grid-template-columns: 0 320px 0;
    .content-item {
      grid-template-columns: 320px;
    }
  }
`;
