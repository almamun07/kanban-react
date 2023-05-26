import React from 'react';
import { X } from 'react-feather';

import './Chip.css';

function Chip(props) {
    const {color, text, close, onClose} = props;
  return (
    <div className='chip' style={{ backgroundColor: color }}>
        {text}
        {close && <X onClick={onClose ? close() : ""}/>}
    </div>
  )
}

export default Chip