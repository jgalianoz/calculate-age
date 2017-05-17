import React from 'react';
import styled from 'styled-components';

const ContFooter = styled.footer`
  align-items: center;
  background: #314c7d;
  display: flex;
  justify-content: center;
  padding: .8em;
  h2 {
    color: #FFF;
    font-size: 1em;
    font-weight: 300;
    margin: 0;
  }
  a {
    text-decoration: none;
    outline: 0;
    margin-left: 5px;
  }:before {
    font-size: 1.5em;
    color: black;
  }
`;

function Footer() {
  return(
    <ContFooter role="footer">
      <h2>
        Developed by Manuel Galindez - @jgalinoz
      </h2>
      <a
        className="icon-github"
        href="https://github.com/jgalianoz/calculate-age"
        target="_blank">
      </a>
    </ContFooter>
  );
}

export default Footer;
