import styled from 'styled-components';

export const ConfigMenuStyle = styled.div`
  display: flex;
  border: 0px 2px solid black;
  padding: 2rem;
  min-width: 300px;
  max-width: 500px;

  & div {
    margin: 0rem 0;
  }

  & label {
    margin: 0.9rem 0;
    cursor: pointer;
  }

  .budgetOption {
    margin: 0.7rem 0;
  }

  span {
    font-size: 1rem;
    &:hover {
      text-shadow: 0 0 0.7rem white;
   }
  }

  h2 {
    text-shadow: 0 5px 10px hsla(0, 0%, 0%, 0.9);
    font-size: 1.8rem;
  }

  .budgetName {
    cursor: default;
    word-break: break-all;
  }

  .budgetClient {
    background: #222;
    color: #fff;
    font-size: 1rem;
    width: 100%;
    border: none;
    box-shadow: 0 0 0rem hsla(0, 0%, 0%, 0.9) !important;

    &:hover {
      background: #444;
      box-shadow: 0 3px 10px hsla(210, 90%, 40%, 0.7) !important;
    }
  }

  .quantityInputBlock {
    padding-left:2.5rem;
  }

  .totalBudget {
    font-size: 1.5rem;
    cursor: default;
  }

  & input[type='checkbox'] {
    padding: 0.5rem;
    width: auto;
    transform: scale(2);
    margin-right: 1.5rem;
  }

  & input[type='number'] {
    width: 2rem;
    text-align: center;
  }

  & input[type='checkbox'], & input[type='button'], & input[type='text'], & .ButtonSave {
    box-shadow: 0 3px 10px hsla(210, 90%, 40%, 0.7);
  }

  & .form {
    margin: 0 auto;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  & .Button {
    border-radius: 20px;
    border: 0px;
    padding: 0.5rem 1rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: hsl(210, 90%, 50%);
    }
  }
`;
