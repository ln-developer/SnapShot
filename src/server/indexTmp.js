export const indexTmp = (content, token) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <script src='/static' type="application/javascript"></script>
    <script>
      window.__token__ = '${token}'
    </script>
    <title>SnapShot</title>
  </head>
  <body class="lightScheme">
    <div id="react_root">${content}</div>
    <div id="modal_root"></div>
  </body>
  </html>
`;
