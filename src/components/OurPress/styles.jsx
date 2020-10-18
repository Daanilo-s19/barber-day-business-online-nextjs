import styled from 'styled-components'

export const ItemPress = styled.div`
  max-width: 352px;
  cursor: pointer;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      font-family: Archivo;
      font-weight: bold;
      font-size: 18px;
      line-height: 125.1%;
      margin: 24px 0 4px;
    }
    p {
      font-family: Archivo;
      font-size: 16px;
      line-height: 125.1%;
      text-align: center;
      mix-blend-mode: normal;
      opacity: 0.8;
    }
  }

  .content-video {
    width: 100%;
    height: 198px;

    iframe {
      border-radius: 12px;
    }
  }

  @media ${({ theme }) => theme.breakpoint.tablet} {
    .content {
      p {
        margin: 0 0 56px;
      }
    }
  }

  @media ${({ theme }) => theme.breakpoint.mobileS} {
  }
`
