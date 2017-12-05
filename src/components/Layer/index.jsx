import React from 'react';
import Item from '../Item';
import './styles/Layer.css';


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
            <Item key={_i.id} id={_i.id} reorderCard={this.props.reorderCard}>
              {_i.text}
            </Item>
          ))}
      </div>
    )
  }
}