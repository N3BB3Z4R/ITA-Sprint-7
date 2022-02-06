import styled from 'styled-components';

// boton para cambiar el nombre de usuario
export const Settings = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  /* padding: 0.5rem; */
  /* margin: 0 0.5rem; */
  font-size: 1.0rem;
  transition: 400ms ease-in-out;
  background-color: transparent !important;

  &:hover {
    background-color: transparent !important;
    transform: scale(1.3);
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  margin-top: 0px;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  z-index: 90;
  transition: 400ms ease-in-out;
`;


// Si el usuario todavia no ha introducido su nombre,
// se muestra una ventana modal que le pide el nombre
export const ModalInfo = styled.div`
	z-index: 100;
	display: ${({props}) => (props?.hidden === false ? 'flex' : 'transparent')};
  justify-content: center;
  align-items: center;
  padding: 1rem;
	position: fixed;
  text-align: center;
  border-radius: 3rem;
  box-shadow: 0px 5px 20px hsla(210, 45%, 0%, 0.8);
  border: 0.55rem solid var(--color-tertiary);
	margin: auto auto;
	height: auto;
	width: auto;
	background: rgba(0,0,0,0.75);
  backdrop-filter: blur(2px);
  transition: display 400ms ease-in-out;
`;

// const Button = styled.button`
//   border: 0.55rem solid orange;
//   border-radius: 5px;
//   /* padding: 1rem; */
//   background-color: orange;
//   color: white;
//   /* margin: 0 0.5rem; */
//   transition: 500ms ease-in-out;
//   font-size: 1.2rem;

//   &:hover {
//     background-color: var(--color-light-primary);
//     box-shadow: inset 0 0 0.7rem hsla(0, 0%, 0%, 0.6);
//     cursor: pointer;
//     transition: 300ms ease-in-out;
//   }
// `;

// const Input = styled.input`
//   border: 0.55rem solid orange;
//   box-shadow: inset 0 0 0.7rem hsla(0, 0%, 0%, 0.6);
//   border-radius: 5px;
//   padding: 1rem;
//   margin: 0 0.5rem;
//   font-size: 1.2rem;
// `;