import { Input } from '@mui/material';
import React from 'react';
import RadioBtns from './RadioBtns';
import './simulador.scss';

function Simulador() {
  return (
    <div className='simulador' >
      <h4>Simulador de Crédito</h4>
        <Input />
        <RadioBtns />
    </div>
    );
}

export default Simulador;
