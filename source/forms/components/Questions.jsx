import React, { Component } from 'react';

import styles from './Questions.styl';

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
      <div className={styles.wrapper}>
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
                  name="year"
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
