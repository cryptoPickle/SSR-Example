import React from "react";
import { renderToString } from "react-dom/server";

export default Component => {
  const content = renderToString(<Component />);
  return `
    <html> 
      <head></head>
      <body>
        <div id='root'>${content}</div>
        <script src='bundle.js'></script>
      </body>
    </html>
  `;
};
