import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Cardo&family=Hind+Madurai&family=Rock+Salt&display=swap");

body {
  margin: 0;
  font-family: "Hind Madurai", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1 {
  font-family: "Rock Salt", "Helvetica", cursive;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

div{

  input {
    font-family: "Courier New", Courier, monospace;
  }

  textarea {
    font-family: "Courier New", Courier, monospace;
  }
}
}

`;

export default GlobalStyle;
