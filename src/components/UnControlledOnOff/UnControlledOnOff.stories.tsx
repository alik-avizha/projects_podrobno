import React from 'react';

import {action} from '@storybook/addon-actions';
import {UnControlledOnOff} from './UnControlledOnOff';

export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff
}
const callback = action('on or off clicked')

export const OnOffMode = () => <UnControlledOnOff defaultOn={true}  setOn={callback}/>;
export const OffMode = () => <UnControlledOnOff  defaultOn={false} setOn={callback}/>;
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>;



