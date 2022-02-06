import styled from 'styled-components';

export const Settings = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.5rem;
  margin: 0 0.5rem;
  font-size: 1.8rem;
  transition: 400ms ease-in-out;

  position:absolute;
  top: 0.3rem;
  right: 1rem;
 

  &:hover {
    background-color: transparent;
    transform: scale(1.3);
  }
`;

// Si el usuario todavia no ha introducido su nombre,
// se muestra una ventana modal que le pide el nombre
export const ModalWelcome = styled.div`
	z-index: 100;
	display: ${({props}) => (props?.user === null ? 'flex' : 'transparent')};
  justify-content: center;
  align-items: center;
	position: fixed;
  text-align: center;
  border-radius: 0rem;
  box-shadow: inset 0px 5px 20px hsl(210, 90%, 50%);
	margin: auto;
	height: 100vh;
	width:100vw;
	background: rgba(0,0,0,0.75);
  backdrop-filter: blur(2px);
  transition: display 400ms ease-in-out;

  & div, & h1 {
    margin: 5rem 0;
  }
`;

export const Button = styled.button`
  border: 4px solid hsl(200, 100%, 45%);
  border-radius: 20px;
  padding: 1rem;
  background-color: #333;
  color: white;
  margin: 0 0.5rem;
  transition: 500ms ease-in-out;
  font-size: 1.2rem;

// hsl(200, 100%, 45%);

  &:hover {
    background-color: hsl(200, 100%, 45%);
    box-shadow: inset 0 0 0.7rem hsla(0, 0%, 0%, 0.6);
    cursor: pointer;
    transition: 300ms ease-in-out;
  }
`;

export const Input = styled.input`
  border: 4px solid hsl(200, 100%, 45%);
  box-shadow: inset 0 0 0.7rem hsla(0, 0%, 0%, 0.6);
  border-radius: 20px;
  padding: 1rem;
  margin: 0 0.5rem;
  font-size: 1.2rem;
`;