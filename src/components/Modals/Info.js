import React, { useState } from 'react'
import { Settings, ModalWrapper, ModalInfo } from './Info.styles'


export const Info = (props) => {

  // console.log('info', props.message)
  // const inputName = useRef(null);

  const [hidden, setHidden] = useState(true);

  if (hidden === false) {
    return <ModalWrapper onClick={() => setHidden(true)} message={props.message}>
        <ModalInfo>{props.message}</ModalInfo>
      </ModalWrapper>
  } else {
    return <Settings onClick={() => setHidden(false)}>💬</Settings>
  }
}
