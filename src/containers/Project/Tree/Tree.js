import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

import SortableTree, { addNodeUnderParent, removeNodeAtPath, changeNodeAtPath } from 'react-sortable-tree';

import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

class Tree extends Component {

    render() {
    
        const getNodeKey = ({ treeIndex }) => treeIndex;

        return (
            <div style={{ height: 500, width: '50%' }}>
                <SortableTree
                    treeData={this.props.treeData}
                    onChange={treeData => this.props.onUpdateTree(treeData)}
                    generateNodeProps={({ node, path }) => ({
                        title: (
                            <TextField
                                value={node.title}
                                placeholder='Enter a Name'
                                onChanged={event => {
                                    const title = event;
                                    this.props.onUpdateTree(changeNodeAtPath({
                                        treeData: this.props.treeData,
                                        path,
                                        getNodeKey,
                                        newNode: { ...node, title },
                                    }))
                                }}
                            />
                        ),
                        buttons: [
                            <TooltipHost content='Add a child' id='myID' calloutProps={ { gapSpace: 0 } }>
                                <IconButton
                                    iconProps={ { iconName: 'RowsChild' } }
                                    onClick={() => this.props.onUpdateTree(addNodeUnderParent({
                                        treeData: this.props.treeData,
                                        parentKey: path[path.length - 1],
                                        expandParent: true,
                                        getNodeKey,
                                        newNode: {
                                            title: ''
                                        },
                                    }).treeData)}
                                >
                                    Add Child
                                </IconButton>
                            </TooltipHost>,
                            <TooltipHost content='Remove From Tree' id='myID' calloutProps={ { gapSpace: 0 } }>
                                <IconButton
                                    iconProps={ { iconName: 'Delete' } }
                                    onClick={() => this.props.onUpdateTree(removeNodeAtPath({
                                        treeData: this.props.treeData,
                                        path,
                                        getNodeKey,
                                    }))}
                                >
                                    Remove
                                </IconButton>
                            </TooltipHost>,
                            <TooltipHost content='Open Editor' id='myID' calloutProps={ { gapSpace: 0 } }>
                                <IconButton iconProps={ { iconName: 'Edit' } }>
                                </IconButton>
                            </TooltipHost>,
                            <TooltipHost content='More Details' id='myID' calloutProps={ { gapSpace: 0 } }>
                                <IconButton iconProps={ { iconName: 'Info' } }>
                                </IconButton>
                            </TooltipHost>,
                            <TooltipHost content='Hide from Consequense Table' id='myID' calloutProps={ { gapSpace: 0 } }>
                                <IconButton iconProps={ { iconName: 'RedEye' } }>
                                </IconButton>
                            </TooltipHost>,
                            <TooltipHost content='Remove From Calculations' id='myID' calloutProps={ { gapSpace: 0 } }>
                                <IconButton iconProps={ { iconName: 'AppIconDefault' } }>
                                </IconButton>
                            </TooltipHost>
                        ]
                    })}
                />
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Tree);
