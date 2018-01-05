import React, { Component } from 'react';

import Help from './Help/Help';
import History from './History/History';
import Chat from './Chat/Chat';
import Manage from './Manage/Manage';

const panelContent = (props) => {
    let content;
    switch(props.type){
        case 'Chat':
            return (<Chat />)
        break;
        case 'History':
            return (<History />)
        break;
        case 'Help':
            return (<Help />)
        break;
        case 'Manage':
            return (<Manage />)
        break;
        default: return (<span>Content Goes here</span>)
    }
}

export default panelContent;