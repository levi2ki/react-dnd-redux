import React from 'react';
import Item from '../Item';
import './styles/Layer.css';


// TODO: here
export default class Layer extends React.Component {
  render() {
    const {itemsById} = this.props;
    if (!itemsById || itemsById.length === 0) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div  className='layer'>
          {itemsById.map( _i => (
            <Item key={_i.id} id={_i.id}>
              {_i.text}
            </Item>
          ))}
      </div>
    )
  }
}