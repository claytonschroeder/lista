import React from 'react';

import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';

import PanelContent from './PanelContent/PanelContent';

//panel recieves 2 props:
//'config' is an object containing the title and size.
//'onClosePanel' is a function to hide the panel when clicking away from the panel or on the 'x'

const panel = (props) => {
    let panelInstatnce = null;
    if(props.config){
        panelInstatnce = (
            <Panel
                isOpen={ props.config }
                isLightDismiss={ true }
                type={ PanelType[props.config.size] }
                onDismiss={ props.onClosePanel }
                isFooterAtBottom={ true }
                headerText={ props.config.title }
                closeButtonAriaLabel='Close'
            >
                <PanelContent type={props.config.title} />
            </Panel>
        )
    }
    return (
        panelInstatnce
    )
}

export default panel;

