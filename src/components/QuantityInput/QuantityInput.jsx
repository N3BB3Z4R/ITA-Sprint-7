import React, { useEffect, useState } from 'react';
import { QuantityInputStyle, ButtonLeft, ButtonRight } from './QuantityInput.styles';
import { Info } from '../Modals/Info';

const QuantityInput = (props) => {

  const [quantity, setQuantity] = useState(props.value);
  // const [modalHidden, setModalHidden] = useState(true);

  const handleButtonClick = (num) => {
    if (quantity <= 1 && num === -1) {
      console.log('Minimum value should be 1')
    } else {
      setQuantity(quantity + num);
      console.log(props.value);
    }
  }

  useEffect(() => {
    props.onChange(quantity);
  }, [props, quantity]);

  const handleInputChange = (e) => {
    setQuantity(+e.target.value);
  }

  // const launchModal = (caption) => {
  //   // setModalHidden(false);
  //   // console.log('Hidden Modal?', modalHidden);
  //   // return <div onClick={() => setModalHidden(false)} style={{zIndex:'100',width:'100vw', height:'100vh', backgroundColor:'hsla(0,0%,40%,0.3)'}}>
  //   //         <div style={{width:'200px', height:'150px'}}>
  //   //           <p>{caption}</p>
  //   //         </div>      
  //   //       </div>
  // }

  return (
    <QuantityInputStyle className="QuantityInputWrapper">
      <ButtonLeft onClick={() => handleButtonClick(-1)}>-</ButtonLeft>
      <input className='number-hidden-arrows' onChange={handleInputChange} value={quantity} type={'number'} />
      <ButtonRight onClick={() => handleButtonClick(1)}>+</ButtonRight>
      {/* <button onClick={() => launchModal()}>ℹ️</button> */}
      <Info hidden={true} message={props.caption}/>
    </QuantityInputStyle>
  );
}

export default QuantityInput;
