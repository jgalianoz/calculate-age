import React from 'react';
import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;
const SlideInDown = styled.div`
  animation: ${slide} .3s;
  position: relative;
  padding: 8em 0;
  text-align: center;
  .CardResult {
    border-radius: 10px;
    max-width: 400px;
    margin: 0 auto;
    overflow: hidden;
  }
  .CardResult-head {
    background: rgba(233, 229, 229, .8);
    padding: .5em;
    h1 {
      font-size: 1.5em;
      font-weight: 300;
      margin: 10px auto 0;
    }
    h2 {
      color: #009688;
      font-size: 3em;
      margin: 0;
    }
    .ContentResult {
      margin: 0 auto;
      border-radius: 50%;
    }
  }
  .CardResult-footer {
    background: #607d8b;
    color: #EEE;
    padding: .5em;
    h3 {
      font-size: 1em;
      font-weight: 300;
      margin: 0;
    }
  }
  .refresh {
    background: #009688;
    border-radius: 50%;
    bottom: 0;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
    display: block;
    position: absolute;
    padding: 1em;
    right: 70px;
    text-decoration: none;
  }:before {
    color: #edeaea;
    font-size: 2em;
  }
`;

function Result (props) {
    return(
      <section>
        <SlideInDown>
          <div className="CardResult">
              <div className="CardResult-head">
                <h1>¡Hey hemos adivinado tu edad!</h1>
                <div className="ContentResult">
                  <img
                    src="https://calculate-age-sfs.now.sh/images/pastel.png"
                    width="120"
                    height="120" />
                  <h2>{props.age}</h2>
                </div>
              </div>
              <div className="CardResult-footer">
                <h3>
                  Invita a tus compañeros y adivina sus edades.
                </h3>
              </div>
          </div>

          <a className="icon-refresh refresh" href="/"></a>

        </SlideInDown>
      </section>
    );
}

export default Result;
