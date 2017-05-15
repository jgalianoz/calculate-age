import http from 'http';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import Layout from './Layout.jsx';

const domain = process.env.NODE_ENV === 'production'
  ? 'https://calculate-age-sfs.now.sh'
  : 'http://localhost:3001';

function requestHandler(request, response) {

  response.setHeader('Content-Type', 'text/html');

  response.write(
    renderToStaticMarkup(
      <Layout
        title='Calculate Age Aplication'
        domain={domain}
      />
    ),
  );

  return response.end();

}

const server = http.createServer(requestHandler);

server.listen(process.env.PORT || 3000);
