import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import LayerContainer from './containers/LayerContainer/index';
import './App.css';

import { connect } from 'react-redux';
import { initList } from './actions/index';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(initList())
  }
  render() {
    return (
      <div className="App">
        <LayerContainer />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(connect()(App));
