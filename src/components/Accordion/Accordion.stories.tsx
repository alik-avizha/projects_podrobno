import React, {useState} from 'react';

import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions';
import {ComponentStory} from '@storybook/react';
import exp from 'constants';

// const GetCategoryObj = (categoryName: 'Color'|'Event'|'Main') => ({
//     table: {
//         category: categoryName
//     }
// })
//
// export default {
//     title: 'components/Accordion',
//     component: Accordion,
//     argTypes: {
//         color: {
//             control: 'color',
//             ...GetCategoryObj('Color')
//         },
//         setCollapsed: {
//             ...GetCategoryObj('Event')
//         },
//         collapsed: {...GetCategoryObj('Main')},
//         titleValue: {...GetCategoryObj('Main')}
//     }
// }
//
// const callback = action('accordion mode change event fired')
//
// const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}/>
// const callbacksProps = {
//     setCollapsed: callback
// }
//
// export const MenuCollapsedMode = Template.bind({})
// MenuCollapsedMode.args = {
//     titleValue: 'Menu',
//     collapsed: true,
//     ...callbacksProps
// }
//
// export const UsersUnCollapsedMode = Template.bind({})
// UsersUnCollapsedMode.args = {
//     titleValue: 'Users',
//     collapsed: false,
//     ...callbacksProps
// }
//
// export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
//     const [value, setValue] = useState<boolean>(true)
//     return <Accordion {...args} collapsed={value} setCollapsed={() => setValue(!value)}/>
// }
// ModeChanging.args = {
//     titleValue: 'Users'
// }

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked');

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} setCollapsed={callback} collapsed={true}
                                                  items={[]} onClick={onClickCallback}/>
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'} setCollapsed={callback} collapsed={false}
                                                     items={[{title: 'Aleks', value: 1}, {title: 'Ivan', value: 2}, {title: 'Igor', value: 3}]}
                                                     onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} setCollapsed={() => setValue(!value)}
                      items={[{title: 'Aleks', value: 1}, {title: 'Ivan', value: 2}, {title: 'Igor', value: 3}]}
                      onClick={(value)=> {alert(`user width ID ${value} should be happy`)}}/>

}