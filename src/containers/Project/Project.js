import React, { Component } from 'react';
import { connect } from 'react-redux';

import Panel from '../../components/Panel/Panel';
import Toolbar from '../../components/ToolBar/ToolBar';
import Tree from './Tree/Tree';

import * as actions from '../../store/actions/index';

class Project extends Component {
    state = {
        panel: null,
        saving: false
    };

    onClosePanel = () => {
        this.setState({ panel: null });
    }

    openPanel = (panel, size) => {
        this.setState({ panel: {title: panel, size: size} })
    }
  
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
