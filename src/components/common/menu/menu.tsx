import React from 'react';
import { SubMenu } from "../../common/submenu/submenu";
import { Checkbox, CheckboxCircle } from '../checkbox/checkbox';
import { Title } from '../title/title';
import { useTypedSelector } from '../../../hooks/useTypedSelector';


function Menu() {
  const { companyFilter,connectionAmountFilter } = useTypedSelector((state) => state.flight)

  // console.log("companyfilter === ", companyFilter);

  return (

    <div className='menu'>

      <section className='menu__container ' >
        <Title title="Количество пересадок" />
        <div className='menu__checkboxes'>
          <Checkbox title={connectionAmountFilter[0].title} enable={connectionAmountFilter[0].enable} />
          <Checkbox title={connectionAmountFilter[1].title} enable={connectionAmountFilter[1].enable} />
          <Checkbox title={connectionAmountFilter[2].title} enable={connectionAmountFilter[2].enable} />
        </div>
      </section>

      <section className='menu__container ' >

        <Title title="Компании" />
        <div className='menu__checkboxes'>
          <CheckboxCircle  title={companyFilter[0].title} enable={companyFilter[0].enable}/>
          <CheckboxCircle  title={companyFilter[1].title} enable={companyFilter[1].enable}/>
          <CheckboxCircle  title={companyFilter[2].title} enable={companyFilter[2].enable}/>
        </div>

      </section>

    </div>

  );
}

export default Menu;
