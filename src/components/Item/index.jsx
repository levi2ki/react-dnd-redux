import React from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from "react-dnd";

import './styles/Item.css';

import {CARD} from '../../constants/dndTypes';

const itemSource = {
  beginDrag(props) {
    return {
      id: props.id,
    }
  }
}
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const itemTarget = {
  hover(props, monitor, component) {

    if (props.id === monitor.getItem().id) {
      return;
    }
    props.reorderCard(monitor.getItem().id, props.id);
  }
};

function collectDrop(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}


class Item extends React.Component {
  render() {
    const {connectDragSource,connectDropTarget, isOver, isDragging} = this.props;
    return connectDropTarget(
      <div className='item' id={this.props.id}>
        {connectDragSource(
        <div 
          className='item__content'
          style={{ 
            backgroundColor: isOver ? 'green' : '#fff',
            opacity: isDragging ? 0.1 : 1,
          }} 
        >
          {this.props.children}
        </div>
        )}
      </div>
    )
  }
}

export default DropTarget(CARD, itemTarget, collectDrop)(DragSource(CARD, itemSource, collect)(Item));
