import { createGlobalStyle } from 'styled-components';

// const desktopStartWidth = '996'
// const desktop = `@media (min-width: ${desktopStartWidth}px)`
// const mobile = `@media (max-width: ${desktopStartWidth}px)`

/* Estilo global con Styled-Component */
export const GlobalStyle = createGlobalStyle`

  :root {
    --color-primary: hsl(10, 65%, 40%);
    --color-secondary: hsl(30, 90%, 50%);
    --color-tertiary: hsl(210, 100%, 45%);
    --color-light-primary: hsla(0, 90%, 45%, 0.9);
    --color-dark-tertiary: hsl(210, 65%, 10%);
  }

  * {
    transition: all 0.2s ease;
  }

  button {
    border: none;
    background: unset;
  }

  body {
    color: #fff;
    background-color: #444;
    margin: 0rem;
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-image 0.6s ease-in-out;
  }

  /* Chrome, Safari, Edge, Opera */
  input.number-hidden-arrows::-webkit-outer-spin-button,
  input.number-hidden-arrows::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number].number-hidden-arrows {
    -moz-appearance: textfield;
  }

  input {
    border: 1px solid #fff;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: #bbb;
  }

  .pageContainer {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .innerShadow {
    box-shadow: inset 0rem 5px 10px hsla(0, 0%, 0%, 0.2);
  }



  /* width */
  ::-webkit-scrollbar {
    width: 1rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px grey; */
    background-color: #333;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #777;
    border-radius: 10px;
  }

`;