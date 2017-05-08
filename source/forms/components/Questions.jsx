import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import MainSection from '../../shared/components/Section';
import Banner from '../../shared/components/Banner';
import Form from './Form';

import Result from '../../results/components/Result';

const Wrapper = styled.div`
  max-width: 680px;
  margin: 0 auto;
`;

class Questions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      birthday: true,
      year: 0,
    };
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(input) {
    const value = input.target.type === 'checkbox' ? input.target.checked : input.target.value;
    const setValue = {};
    setValue[input.target.name] = value;
    this.setState(setValue);
  }

  onSubmit(ev) {

    ev.preventDefault();

    ReactDOM.unmountComponentAtNode(document.getElementById('render-target'));
    ReactDOM.render(<Result />,
     document.getElementById('render-target'));
  }

  render() {

    return (
      <div role="application">

        <MainSection />

        <Banner />

        <section>
          <Wrapper>
            <Form
              update={this.updateInput}
              onSubmit={this.onSubmit}
            />
          </Wrapper>
        </section>

      </div>
    );
  }
}

export default Questions;
