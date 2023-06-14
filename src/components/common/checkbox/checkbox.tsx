import React from 'react';

export function Checkbox() {

  // const [MenuState, setMenuState] = React.useState(false)
  // const HandleEnableMenu = () => {
  // setMenuState(!MenuState)
  // }


  return (
    // Checkbox, switch
    <div className="checkbox">
      <input type="checkbox" name="check1" id="check1" />
      <label htmlFor="check1" className='checkbox__label'>Текст чекбокса</label>
    </div>

  );
}


export function CheckboxCircle() {

  // const [MenuState, setMenuState] = React.useState(false)
  // const HandleEnableMenu = () => {
  // setMenuState(!MenuState)
  // }


  return (
    // Checkbox, switch
    <div className="checkbox">
      <input type="checkbox" name="check1" id="check2" />
      <label htmlFor="check2" className='checkbox__label checkbox__label-circle'>Текст чекбокса</label>
    </div>

  );
}



