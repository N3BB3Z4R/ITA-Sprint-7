import styled from 'styled-components';

export const ListadoPresupuestosStyle = styled.div`
 display: flex;
 flex-flow: column;
 background-color: #444;
 padding: 1rem;

  .SearchBox {
    border: 2px solid hsl(200, 100%, 45%);
    font-size: 1.2rem;
  }

  & ul {
    display: flex;
    flex-flow: column;
    list-style: none;
    background-color: #222;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-y: scroll;
    flex-grow: 1;
    height: 400px;
    width: 300px;

    & li {
      width: 100%;
    }
  }

  .filterButtons {
    display: flex;
    justify-content: space-between;
    
    width: 100%;

    button {
      color: #fff;
      font-weight: bold;
      flex: 1 1 auto;
      justify-content: space-between;
      margin: 0.9rem 0.2rem 0rem 0.2rem;
      background: #777;
      padding: 0.9rem 0;
      border-radius: 20px;
      cursor: pointer;

      & span {
        padding-left: 0.5rem;
      }

      &:hover {
        background-color: hsl(200, 100%, 45%);
        cursor: pointed;
      }
    }
  }

  .createNewButton {
    padding: 0.8rem;
    border: 2px solid hsl(200, 100%, 45%) !important;
    color: white;
    font-weight: bold;
    border-radius: 20px;
    margin-bottom: 0.3rem;

    &:hover {
      background-color: hsl(200, 100%, 45%);
    }
  }

  .budgetButton {
    background: #333;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem 0 0.3rem 0.7rem;
    border-radius: 1rem;
    margin: 0.3rem 0;
    font-weight: bold;
    color: #666;
    border: 2px solid #222;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #777;
      color: #aaa;
      cursor: pointer;
      border: 2px solid hsl(200, 100%, 45%);
    }
  }

  .selected {
    background-color: hsl(200, 100%, 45%) !important;
    color: white;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: white;
      border: 2px solid #333;
    }
  }

  .budgetName {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .deleteButton {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    background-color: hsla(0,0%,0%,0);
    color: #333;
    font-weight: bold;
    padding: 0 0 4px 0;
    margin-right: 0.5rem;
    border: 0;
    border-radius: 20px;

    &:hover {
      background-color: hsl(30, 50%, 60%);
      cursor: pointer;
      background-color: red;
      color: white;
    }
  }
`;
