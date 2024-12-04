import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${(p) => p.theme.background.main};
  color: ${(p) => p.theme.main};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

a {
  text-decoration: none;
  cursor: pointer;
}

button {
  cursor: pointer;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  outline: none;
  border: none;
}

table {
  border-collapse: collapse;
  table-layout: fixed;
  margin: 0;
}

th,
tr {
  border: 0;
  padding: 0;
  margin: 0;

}

ul,
li {
  list-style: none;
  padding-inline-start: 0;
  margin: 0;
}

address {
  font-style: normal;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

input {
  -webkit-appearance: none; 
  -moz-appearance: none; 
  appearance: none; 
  
  border: none;
  outline: none;
  padding: 0;
  margin: 0;

  box-sizing: border-box;

  font-family: inherit;
  font-size: 100%;
  line-height: 1.15; 

  width: 100%;
  
  background: none;
  border-radius: 0;
}

aside {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: auto; 
  height: auto;
  background: transparent; 
  border: none;
  position: relative; 
}

/* --------------------- Custom Scrollbar --------------------*/

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: ${(p) => p.theme.background.mainTransparent};
  border-radius: ${(p) => p.theme.borderRadius.small};
}

::-webkit-scrollbar-thumb {
  background-color: ${(p) => p.theme.background.secondary};
  border-radius: ${(p) => p.theme.borderRadius.small};
  border: 1px solid ${(p) => p.theme.background.mainTransparent};
}

::-webkit-scrollbar-thumb:hover {
  background-color: ${(p) => p.theme.background.light};
}

scrollbar-width: thin; 
scrollbar-color: ${(p) => p.theme.accentColor} ${(p) =>
  p.theme.background.mainTransparent};

`;
