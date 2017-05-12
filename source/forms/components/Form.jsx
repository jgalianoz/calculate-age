import React from 'react';
import styled from 'styled-components';


const Forms = styled.form `

  padding: 1em;

  div {
    margin-bottom: 20px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input[type=number] {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    box-sizing: border-box;
    outline: none;
    padding: .5em;
    width: 100%;
  }
  input[type=number]:focus {
    border-bottom: 1px solid #26c6da;
    box-shadow: 0 1px 0 0 #26c6da;
    transition: .3s;
  }
  button {
    background: #009688;
    border: 1px solid #009688;
    border-radius: 10px;
    color: #FFF;
    padding: 1em;
  }
`;

const Switch = styled.div`
  span {
    content : "";
    display: inline-block;
    position: relative;
    width: 40px;
    height: 15px;
    background-color: #818181;
    border-radius: 15px;
    margin-right: 10px;
    transition: background 0.3s ease;
    vertical-align: middle;
    margin: 0 16px;
  }
  span:after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 21px;
    height: 21px;
    background-color: #F1F1F1;
    border-radius: 21px;
    box-shadow: 0 1px 3px 1px rgba(0,0,0,0.4);
    left: -5px;
    top: -3px;
    transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease;
  }
  input[type=checkbox] {
    opacity: 0;
    width: 0;
    height: 0;
  }:checked {
    position: absolute;
    left: -9999px;
    opacity: 0;
  }
  input[type=checkbox]:checked + span {
    background-color: #26c6da;
  }
  input[type=checkbox]:checked + span:after {
    background-color: #26c6da;
    left: 24px;
  }
  .option {
    font-size: 12px;
  }
`;

function Form (props) {
  return(
    <Forms onSubmit={props.onSubmit}>
      <div>
        <label>
          Choose a number (1-9):
        </label>
        <input
          name="number"
          type="number"
          min="1"
          max="9"
          onChange={props.update}
           required/>
      </div>

      <Switch>
        <label>
          ¿Ya has cumplido año?
        </label>
        <label className="option">
          Not
          <input
            type="checkbox"
            name="birthday"
            onChange={props.update}/>
            <span></span>
          Yes
        </label>
      </Switch>

      <div>
        <label>
          Year of birth:
        </label>
        <input
          name="year"
          type="number"
          onChange={props.update}
          placeholder="Año de nacimiento"
           required/>
      </div>

      <button>
        Enviar Resultados
      </button>

    </Forms>
  );
}

export default Form;
