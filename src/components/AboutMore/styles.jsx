import styled from "styled-components";

export const MoreInformation = styled.div`
  display: grid;
  width: auto;
  height: auto;
  row-gap: 8px;
  cursor: pointer;
  label {
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #c7deff;
    cursor: pointer;
  }
  img {
    width: 79px;
    transition: 500ms;
  }

  &:hover {
    img {
      width: 157px;
    }
  }
`;
