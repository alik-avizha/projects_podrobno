import React, {useState} from 'react';

import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions';
import {ComponentStory} from '@storybook/react';

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode change event fired')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}/>
const callbacksProps = {
    setCollapsed: callback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    ...callbacksProps
}


export const UsersUnCollapsedMode = Template.bind({})
UsersUnCollapsedMode.args = {
    titleValue: 'Users',
    collapsed: false,
    ...callbacksProps
}


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} setCollapsed={() => setValue(!value)}/>
}


