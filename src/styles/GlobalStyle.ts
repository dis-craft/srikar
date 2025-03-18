import { css, Global } from '@emotion/react';

export const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Arial', sans-serif;
        background-color: #f0f0f0;
        color: #333;
        line-height: 1.6;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      button {
        cursor: pointer;
        border: none;
        outline: none;
        background: none;
      }

      section {
        padding: 80px 20px;
        max-width: 1200px;
        margin: 0 auto;
      }

      h2 {
        text-align: center;
        margin-bottom: 40px;
        color: #3498db;
      }

      @media (max-width: 768px) {
        section {
          padding: 60px 15px;
        }
      }
    `}
  />
); 