import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('https://calculate-age-sfs.now.sh/images/cover-home.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    color: #26c6da;
  }

  a {
    display: block;
    padding: 1em;
    border-radius: 10px;
    background: #009688;
    color: #FFF;
    text-decoration: none;
    text-align: center;
    margin: 10px auto 0;
    width: 100px;
  }
`;

function MainSection () {
  return(
    <Section role="MainSection">
      <h1>¡Let's calculate your age!</h1>
      <a href="#">Empecemos</a>
    </Section>
  );
}

export default MainSection;
