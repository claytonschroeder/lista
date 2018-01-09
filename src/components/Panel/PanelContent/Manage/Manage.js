import React from 'react';

import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';

const manage = (props) => {
    return (
        <div>
            <Pivot>
                <PivotItem linkText='Details'>
                    <Label>Management actions for project details:</Label>
                </PivotItem>
                <PivotItem linkText='Users'>
                    <Label>Management actions for users.</Label>
                </PivotItem>
                <PivotItem linkText='Versions'>
                    <Label>Management actions for saving new versions and uploading previous versions.</Label>
                </PivotItem>
                <PivotItem linkText='Release'>
                    <Label>Management actions for releasing project for feedback/engagement.</Label>
                </PivotItem>
            </Pivot>
        </div>
    )
}

export default manage;