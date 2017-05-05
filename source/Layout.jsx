import React from 'react';


function Layout (props) {
  return(
    <html lang="es">
    <head>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
      />

      <link
        rel="shortcut icon"
        href="http://localhost:3001/images/cover-home.png"
      />

    </head>
    <body>

      <section className="Landing">
        <div id="render-target"></div>
      </section>

      <script src="http://localhost:3001/app.js"></script>
    </body>
    </html>
  );
}

export default Layout;
