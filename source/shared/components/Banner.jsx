import React from 'react';
import styled from 'styled-components';

const TopBanner = styled.div`
  background: #314c7d;
  padding: .8em;
  h2 {
    color: #FFF;
    font-size: 1em;
    font-weight: 300;
    margin: 0;
    text-align: center;
  }
`;

function Banner () {
  return(
    <TopBanner role="banner">
      <h2>
        Let's travel back in time and guess your age
      </h2>
    </TopBanner>
  );
}

export default Banner;
