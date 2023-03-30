import React, {useState} from 'react';

import {OnOff} from './OnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'components/OnOff',
    component: OnOff
}

const callback = action('on or off clicked')

export const OnMode = () => <OnOff on={true}  setOn={callback}/>;
export const OffMode = () => <OnOff on={false}  setOn={callback}/>;


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} setOn={setValue} />;
}


