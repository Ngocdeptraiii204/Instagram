import styled, { createGlobalStyle } from 'styled-components';
import { StyledTypo } from '../mixins';
import { APP_COLORS, APP_SIZES } from '../../themes';
import 'react-loading-skeleton/dist/skeleton.css';

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    ${StyledTypo.textBody({})}
    color: ${APP_COLORS.white};
    background-color: ${APP_COLORS.black};
    min-height: 100vh;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a,
  button {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
  }

  button {
    background-color: transparent;
  }

  a,
  button,
  input {
    border: 0;
    outline: 0;
    color: inherit;
  }

  li,
  ol {
    list-style: none;
  }

  .container {
    max-width: ${APP_SIZES.xl};
    width: 100%;
    margin: 0 auto;

    &.md {
      max-width: ${APP_SIZES.lg};
    }

    &.sm {
      max-width: ${APP_SIZES.sm};
    }
  }

  #dark {
    background-color: ${APP_COLORS.black};
  }

  #light {
    background-color: ${APP_COLORS.white};
  }

  
  ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
          }
  ::-webkit-scrollbar-track {
            border-radius: 10px;
            background: rgba(${(APP_COLORS.whiteRBG, 0.4)});
          }
  ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.6);
          }
  ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.4);
          }
  ::-webkit-scrollbar-thumb:active {
            background: rgba(255, 255, 255, 0.9);
          }
  .p-1 {
    padding: 4px;
  }
  .p-2 {
    padding: 8px;
  }
  .p-3 {
    padding: 12px;
  }
  .p-4 {
    padding: 16px;
  }
  .p-5 {
    padding: 20px;
  }

  .pt-1 {
    padding-top: 4px;
  }
  .pt-2 {
    padding-top: 8px;
  }
  .pt-3 {
    padding-top: 12px;
  }
  .pt-4 {
    padding-top: 16px;
  }
  .pt-5 {
    padding-top: 20px;
  }

  .pb-1 {
    padding-bottom: 4px;
  }
  .pb-2 {
    padding-bottom: 8px;
  }
  .pb-3 {
    padding-bottom: 12px;
  }
  .pb-4 {
    padding-bottom: 16px;
  }
  .pb-5 {
    padding-bottom: 20px;
  }

  .pr-1 {
    padding-right: 4px;
  }
  .pr-2 {
    padding-right: 8px;
  }
  .pr-3 {
    padding-right: 12px;
  }
  .pr-4 {
    padding-right: 16px;
  }
  .pr-5 {
    padding-right: 20px;
  }

  .pl-1 {
    padding-left: 4px;
  }
  .pl-2 {
    padding-left: 8px;
  }
  .pl-3 {
    padding-left: 12px;
  }
  .pl-4 {
    padding-left: 16px;
  }
  .pl-5 {
    padding-left: 20px;
  }

  .px-1 {
    padding-left: 4px;
    padding-right: 4px;
  }
  .px-2 {
    padding-left: 8px;
    padding-right: 8px;
  }
  .px-3 {
    padding-left: 12px;
    padding-right: 12px;
  }
  .px-4 {
    padding-left: 16px;
    padding-right: 16px;
  }
  .px-5 {
    padding-left: 20px;
    padding-right: 20px;
  }

  .py-1 {
    padding-top: 4px;
    padding-bottom: 4px;
  }
  .py-2 {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .py-3 {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .py-4 {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .py-5 {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .m-1 {
    margin: 4px;
  }
  .m-2 {
    margin: 8px;
  }
  .m-3 {
    margin: 12px;
  }
  .m-4 {
    margin: 16px;
  }
  .m-5 {
    margin: 20px;
  }

  .mt-1 {
    margin-top: 4px;
  }
  .mt-2 {
    margin-top: 8px;
  }
  .mt-3 {
    margin-top: 12px;
  }
  .mt-4 {
    margin-top: 16px;
  }
  .mt-5 {
    margin-top: 20px;
  }

  .mb-1 {
    margin-bottom: 4px;
  }
  .mb-2 {
    margin-bottom: 8px;
  }
  .mb-3 {
    margin-bottom: 12px;
  }
  .mb-4 {
    margin-bottom: 16px;
  }
  .mb-5 {
    margin-bottom: 20px;
  }

  .mr-1 {
    margin-right: 4px;
  }
  .mr-2 {
    margin-right: 8px;
  }
  .mr-3 {
    margin-right: 12px;
  }
  .mr-4 {
    margin-right: 16px;
  }
  .mr-5 {
    margin-right: 20px;
  }

  .ml-1 {
    margin-left: 4px;
  }
  .ml-2 {
    margin-left: 8px;
  }
  .ml-3 {
    margin-left: 12px;
  }
  .ml-4 {
    margin-left: 16px;
  }
  .ml-5 {
    margin-left: 20px;
  }

  .mx-1 {
    margin-left: 4px;
    margin-right: 4px;
  }
  .mx-2 {
    margin-left: 8px;
    margin-right: 8px;
  }
  .mx-3 {
    margin-left: 12px;
    margin-right: 12px;
  }
  .mx-4 {
    margin-left: 16px;
    margin-right: 16px;
  }
  .mx-5 {
    margin-left: 20px;
    margin-right: 20px;
  }

  .my-1 {
    margin-top: 4px;
    margin-bottom: 4px;
  }
  .my-2 {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .my-3 {
    margin-top: 12px;
    margin-bottom: 12px;
  }
  .my-4 {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .my-5 {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
