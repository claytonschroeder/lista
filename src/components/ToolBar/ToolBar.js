import React, { Component } from 'react';

import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

const toolbar = (props) => {

    let farItemsArray = [
        {
            key: 'chat',
            name: 'Chat',
            icon: 'Chat',
            onClick: () => { props.openPanel('Chat', 'medium') }
        },
        {
            key: 'history',
            name: 'History',
            icon: 'FullHistory',
            onClick: () => { props.openPanel('History', 'medium') }
        },
        {
            key: 'help',
            name: 'Help',
            icon: 'Unknown',
            onClick: () => { props.openPanel('Help', 'large') }
        }
    ]

    let itemsArray = [
        {
            key: 'addObjective',
            name: 'Add Objective',
            icon: 'Add',
            onClick: () => { props.addNew() }    
        },
        {
            key: 'manage',
            name: 'Manage Project',
            icon: 'PlayerSettings',
            onClick: () => { props.openPanel('Manage', 'large') }
        }
    ]

    if(props.saving){
        farItemsArray.push({
            key: 'saving',
            name: 'Saving...'
        })
    } else {
        farItemsArray.push({
            key: 'saving',
            name: 'Saved',
            icon: 'Accept'
        })
    }

    return (
        <CommandBar
            items={ itemsArray }
            farItems={ farItemsArray }
        />
    )
}

export default toolbar;