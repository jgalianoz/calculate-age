import React, { Component } from 'react';

import styled from 'styled-components';



const MainSection = styled.section`
  background-image: url('http://localhost:3001/images/cover-home.png');
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

class Questions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      birthday: true,
      year: new Date().getFullYear(),
    };
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(input) {
    const setValue = {};
    setValue[input.target.name] = input.target.value;
    this.setState(setValue);
    console.log(setValue);
  }

  render() {
    return (
      <div>

        <MainSection>
          <h1>¡Let's calculate your age!</h1>
          <a href="#">Empecemos</a>
        </MainSection>

        <div>
          <h2>
            Let's travel back in time and guess your age
          </h2>
        </div>

        <form>
          <div>
            <label>
              Choose a number (1-10):
                <input
                  name="number"
                  type="number"
                  min="1"
                  max="10"
                  value={this.state.number}
                  onChange={this.updateInput}
                  required />
            </label>
          </div>

          <div>
            <label>
                ¡Yes!
                <input
                  type="radio"
                  name="birthday"
                  value={true}
                  onChange={this.updateInput}
                  required />
            </label>
          </div>

          <div>
            <label>
                ¡Not!
                <input
                  type="radio"
                  name="birthday"
                  value={false}
                  onChange={this.updateInput}
                  required />
            </label>
          </div>

          <div>
            <label>
              Year of birth:
                <input
                  name="number"
                  type="number"
                  value={this.state.year}
                  onChange={this.updateInput}
                  required />
            </label>
          </div>

          <button>Obtener Resultados</button>

        </form>
      </div>
    );
  }
}

export default Questions;
