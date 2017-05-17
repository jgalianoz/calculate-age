import React from 'react';
import { render } from 'react-dom';

import Questions from './forms/components/Questions';
import './shared/components/fonts.js';

render(
  <Questions />,
  document.getElementById('render-target'),
);
