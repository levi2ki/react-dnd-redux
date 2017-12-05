import React from 'react';
import { findDOMNode } from 'react-dom';
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

// drop
const itemTarget = {
  hover(props, monitor, component) {
    const drag = monitor.getItem();

    if (props.id === drag.id) {
      return;
    }

    // getting elements coordinates to variables
    const hoverNodeCoords = findDOMNode(component).getBoundingClientRect();
    // get middle point coordinate of hovered element
    const hoverMidXPoint = hoverNodeCoords.left + hoverNodeCoords.width / 2;
    const hoverMidYPoint = hoverNodeCoords.top + hoverNodeCoords.height / 2;
    // get half of half width and hegiht rectangle 
    const hoverWithinX = hoverNodeCoords.width / 4;
    const hoverWithinY = hoverNodeCoords.height / 4;

    const dragCoords = monitor.getClientOffset();

    // if x within hoverWithinX from left or right from middle point
    const ifElemWithinDroppableRangeX = (dragCoords.x > (hoverMidXPoint + hoverWithinX)) || (dragCoords.x < (hoverMidXPoint - hoverWithinX));
    // if y within hoverWithinY from top or bottom from middle point
    const ifElemWithinDroppableRangeY = (dragCoords.y > (hoverMidYPoint + hoverWithinY)) || (dragCoords.y < (hoverMidYPoint - hoverWithinY));
    // this coords are unacceptable. only accept centered half-element-size rectangle
    if(ifElemWithinDroppableRangeY && !ifElemWithinDroppableRangeX) {
      // if element within X-range but not in Y-range
      return;
    } else if (!ifElemWithinDroppableRangeY && ifElemWithinDroppableRangeX) {
      // if element within Y-range but not in X-range
      return;
    } else if (ifElemWithinDroppableRangeY && ifElemWithinDroppableRangeX) {
      // if both X and Y not in range
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
