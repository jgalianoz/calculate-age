import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
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
  padding-top: 8em;
  text-align: center;

  .CardResult {
    border-radius: 10px;
    max-width: 400px;
    margin: 0 auto;
    overflow: hidden;
  }
  .CardResult-head {
    background: rgba(233, 229, 229, 0.6);
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
                    src="http://localhost:3001/images/pastel.png"
                    width="120"
                    height="120" />
                  <h2>{props.result}</h2>
                </div>
              </div>
              <div className="CardResult-footer">
                <h3>
                  Invita a tus compañeros y adivina sus edades.
                </h3>
              </div>
          </div>
        </SlideInDown>
      </section>
    );
}

export default Result;
