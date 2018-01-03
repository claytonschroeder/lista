import React, { Component } from 'react';

import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';



import classes from './App.css';

class App extends Component {
  state = {
    showPanel: false
  };

  onClosePanel = () => {
    this.setState({
      showPanel: false
    })
  }
  openPanel = () => {
    this.setState({
      showPanel: true
    })
  }
  
  render() {
    return (
      <div className={ classes.App }>
        <PrimaryButton onClick = { this.openPanel }>
          Open
        </PrimaryButton>
        <Panel
          isOpen={ this.state.showPanel }
          type={ PanelType.smallFixedFar }
          onDismiss={ this.onClosePanel }
          headerText='Panel - Small, right-aligned, fixed, with footer'
          closeButtonAriaLabel='Close'
        >
          <ChoiceGroup
            options={ [
              {
                key: 'A',
                text: 'Option A'
              },
              {
                key: 'B',
                text: 'Option B',
                checked: true
              },
              {
                key: 'C',
                text: 'Option C',
                disabled: true
              },
              {
                key: 'D',
                text: 'Option D',
                checked: true,
                disabled: true
              }
            ] }
            label='Pick one'
            required={ true }
          />
        </Panel>
      </div>
    );
  }
}

export default App;
