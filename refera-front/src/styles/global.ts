import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`

  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      outline: 0;
      padding: 0;
    }

    html,
    body {
      min-height: 100%;
    }

    body {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding-bottom: 1.875rem;
      font-family: ${theme.font.family};
      background: ${theme.colors.primary.lightGrey};
      color: ${theme.colors.neutral.darkGrey};
    }

    body,
    input,
    select,
    button {
      font-size: ${theme.font.sizes.small};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: ${theme.font.bold};
    }

    button:not(:disabled) {
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
    }

    li {
      list-style: none;
    }

    scrollbar-color: ${theme.colors.neutral.grey}
      ${theme.colors.neutral.extraLightGrey};
    scrollbar-width: thin;

    ::-webkit-scrollbar {
      width: 0.5rem;
    }

    ::-webkit-scrollbar-track {
      background: ${theme.colors.neutral.extraLightGrey};
      border-radius: 0.25rem;
    }
    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }

    html {
      font-size: 62.5%;

      @media (max-width: 1080px) {
        font-size: 93.75%;
      }
      @media (max-width: 720px) {
        font-size: 87.5%;
      }
    }

    .react-modal-overlay {
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .react-modal-content {
      width: 100%;
      max-width: 57.6rem;
      background: ${theme.colors.primary.lightGrey};
      padding: 3rem;
      position: relative;
      border-radius: 0.24rem;
    }

    .react-modal-close {
      position: absolute;
      right: ${theme.spacings.xsmall};
      top: ${theme.spacings.xsmall};
      border: 0;
      background: transparent;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  `}`
