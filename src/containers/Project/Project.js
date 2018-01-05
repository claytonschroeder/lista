import React, { Component } from 'react';
import { connect } from 'react-redux';

import Panel from '../../components/Panel/Panel';
import Toolbar from '../../components/ToolBar/ToolBar';
import Tree from './Tree/Tree';

import * as actions from '../../store/actions/index';


const firstNames = [
    'Abraham',
    'Adam',
    'Agnar',
    'Albert',
    'Albin',
    'Albrecht',
    'Alexander',
    'Alfred',
    'Alvar',
    'Ander',
    'Andrea',
    'Arthur',
    'Axel',
    'Bengt',
    'Bernhard',
    'Carl',
    'Daniel',
    'Einar',
    'Elmer',
    'Eric',
    'Erik',
    'Gerhard',
    'Gunnar',
    'Gustaf',
    'Harald',
    'Herbert',
    'Herman',
    'Johan',
    'John',
    'Karl',
    'Leif',
    'Leonard',
    'Martin',
    'Matt',
    'Mikael',
    'Nikla',
    'Norman',
    'Oliver',
    'Olof',
    'Olvir',
    'Otto',
    'Patrik',
    'Peter',
    'Petter',
    'Robert',
    'Rupert',
    'Sigurd',
    'Simon',
];

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
        panel: null,
        saving: true
    };
  }

    onClosePanel = () => {
        this.setState({ panel: null });
    }

    openPanel = (panel, size) => {
        this.setState({ panel: {title: panel, size: size} })
    }


    getRandomName = () => firstNames[Math.floor(Math.random() * firstNames.length)];
  
    addNew = () => {
        this.props.onUpdateTree(this.props.treeData.concat({title: ''}))
    }

  render() {
    return (
      <div>
        <Panel config={this.state.panel} onClosePanel={ this.onClosePanel }/>
        <Toolbar addNew={ this.addNew } openPanel={ this.openPanel } saving={ this.state.saving }/>
        <Tree treeData={ this.props.treeData }/>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        treeData: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateTree: (treeData) => dispatch(actions.updateTree(treeData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
