import React from 'react';
import './subMenu.scss';

function SubMenu({items}) {
  return (
    <div className='subMenu'>
        <p>{items}</p>
    </div>
    );
}

export default SubMenu;
