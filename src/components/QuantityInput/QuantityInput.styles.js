import styled from 'styled-components';

export const QuantityInputStyle = styled.div`
 display: flex;

 & > button {
   border-radius: 40%;
   border: 0px;
   margin: 0 0rem;
   cursor: pointer;
   width:2rem;
   font-weight: bold;
   color: white;
   background-color: hsl(210, 90%, 50%);

   &:hover {

   }
 }

 & > input {
    font-weight: bold;
    font-size: 1.1rem;
    width:50px;
    border-radius: 0%;
    border: 0px;

    &:hover {
      background-color: hsl(210, 90%, 50%);
      color:white;
      
    }

    &:focus {
      text-shadow: 0 0 1.7rem hsla(210, 90%, 50%, 0.5);
      z-index:80;
    }
  }
`;

export const ButtonLeft = styled.button`
  border-radius: 40% 0% 0% 40% !important;
  font-size: 1.5rem;

  &:hover {
    text-shadow: inset 0 0 0.8rem hsla(0, 0%, 10%, 0.8);
    transform: scale(1.1);
  }
`;

export const ButtonRight = styled.button`
  border-radius: 0% 40% 40% 0 !important;
  font-size: 1.5rem;

  &:hover {
    text-shadow: inset 0 0 0.8rem hsla(0, 0%, 10%, 0.8);
    transform: scale(1.1);
  }
`;