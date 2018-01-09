import React from 'react';

import Help from './Help/Help';
import History from './History/History';
import Chat from './Chat/Chat';
import Manage from './Manage/Manage';

const panelContent = (props) => {
    let content;
    switch(props.type){
        case 'Chat':
            content = (<Chat />)
            break;
        case 'History':
            content = (<History />)
            break;
        case 'Help':
            content = (<Help />)
            break;
        case 'Manage':
            content = (<Manage />)
            break;
        default:
            content = (<span>Content Goes here</span>)
    }
    return content;
}

export default panelContent;