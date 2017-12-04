import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from "redux";
import Layer from '../../components/Layer/index';
// import {initList} from '../../actions/index';

class LayerContainer extends React.Component {
  render() {
    return (
      <Layer {...this.props} />
    )
  }
}

const mapStateToProps = (state) => ({
  itemsById: state.drawOrder.map(_i => state.cards[_i])
})

export default connect(mapStateToProps)(LayerContainer);