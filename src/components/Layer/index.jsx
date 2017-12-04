import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import Item from '../Item';
import './styles/Layer.css';

export default class Layer extends React.Component {
  render() {
    return (
      <div  className='layer'>
        <Item id={v4()}> 1 </Item>
        <Item id={v4()}> 2 </Item>
        <Item id={v4()}> 3 </Item>
        <Item id={v4()}> 4 </Item>
        <Item id={v4()}> 5 </Item>
      </div>
    )
  }
}