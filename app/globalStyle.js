import { css } from "@emotion/core";

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:900,700,500,400,300,100');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

  }

  body {
    font-family: Roboto;
    font-size: 15px;
  }

  a {
    color: #ff4040;
    text-decoration: none;
  }

  a.about-vschool {
    color: #fff;
  }

  a:hover {
    text-decoration: underline;
  }

  .footer {
    width: 100%;
    text-align: center;
    color: #555;
  }
`;

export default globalStyle;
