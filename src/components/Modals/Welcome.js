import React, { useRef } from 'react'
import { Settings, ModalWelcome, Button, Input } from './Welcome.styles'


export const Welcome = (props) => {

  console.log('welcome', props)
  const inputName = useRef(null);

  if (props.user === null) {
    return <ModalWelcome user={props.user}>
        <h1>Hola {props.user}!</h1>
        <h4>Bienvenido a nuestro generador de presupuestos.</h4>
        <h4>Aquí podrás seleccionar entre los diferentes servicios que te ofrecemos.</h4>
        <h4>Ingresa tu nombre de usuario para poder guardar tus presupuestos.</h4>
        <h4>Copia la URL y pásasela a quien quieras para que pueda verlo.</h4>
        <div>
          <Input ref={inputName} minLength={3} maxLength={16} type="input" placeholder="Nombre" />
          <Button type="submit" onClick={() => props.setUser(inputName.current.value)}>Entrar</Button>
        </div>
      </ModalWelcome>
  } else {
    return <Settings onClick={() => props.setUser(null)}>⚙️</Settings>
  }
}