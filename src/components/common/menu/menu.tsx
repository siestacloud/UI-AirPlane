import React from 'react';
import { SubMenu } from "../../common/submenu/submenu";
import { Checkbox, CheckboxCircle } from '../checkbox/checkbox';
import { Title } from '../title/title';


function Menu() {


  return (

    <div className='menu'>

      <section className='menu__container ' >
        <Title title="Количество пересадок" />
        <div className='menu__checkboxes'>
          <Checkbox />
          <Checkbox />
          <Checkbox />
        </div>
      </section>

      <section className='menu__container ' >

        <Title title="Компании" />
        <div className='menu__checkboxes'>

          <CheckboxCircle />
          <CheckboxCircle />
          <CheckboxCircle />
        </div>

      </section>

    </div>

  );
}

export default Menu;
