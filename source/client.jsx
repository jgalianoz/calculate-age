import React from 'react';
import { render } from 'react-dom';

function Hello() {
  return(
    <h1>Hello Gays</h1>
  );
}

render(
  <Hello />,
  document.getElementById('render-target'),
);
