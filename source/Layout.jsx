import React from 'react'

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
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
      />
    </head>
    <body>
      <section className="Landing">
        <div className="MainSection">
          <h1>I love Dios</h1>
        </div>
      </section>
    </body>
    </html>
  );
}

export default Layout;
