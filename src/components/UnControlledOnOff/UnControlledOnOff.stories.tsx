import React from 'react';

import {action} from '@storybook/addon-actions';
import {UnControlledOnOff} from './UnControlledOnOff';

export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff
}
const callback = action('on or off clicked')

export const OnOffMode = () => <UnControlledOnOff  setOn={callback}/>;



