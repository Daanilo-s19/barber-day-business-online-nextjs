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
    max-width: 375px;
    padding: 0;
  }
`;
export const ItemBlog = styled.div`
  max-width: 352px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  backdrop-filter: blur(20px);
  border-radius: 10px;
  cursor: pointer;

  .tag {
    width: 98px;
    height: 24px;
    background: rgba(85, 46, 229, 0.8);
    box-shadow: 0px 2px 4px rgba(85, 46, 229, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
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
    padding: 20px;
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
