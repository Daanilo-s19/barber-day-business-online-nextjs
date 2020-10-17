import styled from 'styled-components'

export const ButtonDefault = styled.button`
  width: ${(props) => (props.width ? props.width : '192px')};
  max-width: ${(props) => (props.width ? props.width : '192px')};
  height: 51px;
  border-radius: 100px;
  border: ${(props) =>
    props.background
      ? props.background
      : '1px solid rgba(255, 255, 255, 0.2);'};
  background: ${(props) => (props.background ? props.background : 'none')};
  box-shadow: ${(props) =>
    props.shadow ? '0px 10px 25px rgba(42, 158, 152, 0.32)' : 'none'};
  transition: 500ms;
  /* padding: 15px 15px 17px 32px; */
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : '#ffffff')};

  #image {
    margin-left: 15px;
  }

  &:hover {
    cursor: pointer;
    animation: goButton 750ms infinite alternate;

    background: ${(props) =>
      props.backgroundHover ? props.backgroundHover : 'none'};
    border: ${(props) => (props.background ? props.background : '0px solid')};
    box-shadow: ${(props) =>
      props.shadow && '0px 10px 25px rgba(42, 158, 152, 0.32)'};
  }

  @keyframes goButton {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(15px);
    }
  }

  @media ${({ theme }) => theme.breakpoint.mobileL} {
    max-width: 425px;
    /* width: 312px; */
  }
  @media ${({ theme }) => theme.breakpoint.mobileS} {
    width: 300px;
  }
`
