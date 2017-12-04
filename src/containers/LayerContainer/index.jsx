import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from "redux";
import Layer from '../../components/Layer/index';
import {reorderCard} from '../../actions/index';

class LayerContainer extends React.Component {
  render() {
    return (
      <Layer {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    itemsById: state.drawOrder.map((_x) => {
      return state.cards[_x];
    })
  }
}

export default connect(mapStateToProps, {reorderCard})(LayerContainer);