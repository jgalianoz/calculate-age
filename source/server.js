import http from 'http';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import Layout from './Layout.jsx';

function requestHandler(request, response) {

  response.setHeader('Content-Type', 'text/html');

  response.write(
    renderToStaticMarkup(
      <Layout
        title='Calculate Age Aplication'
      />
    ),
  );

  return response.end();

}

const server = http.createServer(requestHandler);

server.listen(process.env.PORT || 3000);
