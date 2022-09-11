import { createGlobalStyle } from 'styled-components'

const ResetCSS = createGlobalStyle`
  * {
    box-sizing: border-box    
  }

  *:focus {
    outline: none !important;
    outline: 0 !important;
    border:solid 1px red;
}

  html, body {
    margin:0px;
    padding:0px;
    overflow:hidden;
    background-color: #C0DEED;
  }

  p {
    margin:0px;
    padding:0px;
  }

  h1 {
    margin:0px;
    padding:0px;
  }

  input[readonly] {
    cursor: text;
    background-color: #fff;
    
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0 1000px white inset !important
  }

  select, a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`

export default ResetCSS 