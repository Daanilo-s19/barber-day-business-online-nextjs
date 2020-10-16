import styled from 'styled-components'

export const ItemPress = styled.div`
  max-width: 352px;
  cursor: pointer;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      font-weight: bold;
      font-size: 18px;
      line-height: 125.1%;
      margin: 24px 0 4px;
    }
    p {
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

  @media ${({ theme }) => theme.breakpoint.mobileL} {
    width: 296px;
    height: auto;
  }
`
