import React, { Component } from 'react';

import classes from './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    return (
        <div className="ms-Grid">
            <div className={"ms-Grid-row " + classes.Header}>
                <div className={"ms-Grid-col ms-sm12 ms-md12 ms-lg12 " + classes.HeaderContent}>
                    <div className={classes.UpperDiv}>
                        Header
                    </div>
                </div>
            </div>
            <div className={"ms-Grid-row Content " + classes.Content}>
                <div className={"ms-Grid-col ms-sm6 ms-md8 ms-lg8" + classes.Visual}>
                    <div className={classes.LowerLeftDiv}>
                        Visual/Info
                    </div>
                </div>
                <div className={"ms-Grid-col ms-sm6 ms-md4 ms-lg4" + classes.Form}>
                    <div className={classes.LowerRightDiv}>
                        Login/Reg
                    </div>
                </div>
            </div>
        </div>
    );
  }
}


export default Home;
