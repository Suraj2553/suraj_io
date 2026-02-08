import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    overflow-x: hidden;
    min-height: 100vh;
  }

  /* Fix navigation wrapping across all pages */
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap !important;
    box-sizing: border-box;
  }

  .nav-links,
  .header-links,
  .menu-items {
    display: flex !important;
    flex-wrap: nowrap !important;
    white-space: nowrap;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-links a,
  .header-links a,
  .menu-items a,
  .nav-links li,
  .header-links li {
    white-space: nowrap !important;
    text-decoration: none;
    color: inherit;
    display: inline-flex !important;
    align-items: center;
  }

  /* Ensure Contact Me stays on one line */
  .nav-links a:last-child,
  .header-links a:last-child {
    white-space: nowrap !important;
    min-width: max-content;
  }

  /* Responsive fix for mobile */
  @media (max-width: 768px) {
    .nav-links,
    .header-links {
      gap: 15px;
      font-size: 0.9rem;
    }
  }`;
