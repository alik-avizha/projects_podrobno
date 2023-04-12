import React, {useState} from 'react';
import {Select} from './Select';

export default {
    title: 'components/Select',
    component: Select
}

export const WithValue = () => {
    const [value, setValue] = useState('1')
    return <>
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: '1', title: 'Kiev'},
                {value: '2', title: 'Piter'},
                {value: '3', title: 'Minsk'},
                {value: '4', title: 'Paris'}
            ]}/>

    </>
}
export const WithoutValue = () => {
const [value, setValue] = useState(null)
    return <>
        <Select
            onChange={setValue}
            value={value}
            items={[
                {value: '1', title: 'Kiev'},
                {value: '2', title: 'Piter'},
                {value: '3', title: 'Minsk'},
                {value: '4', title: 'Paris'}
            ]}/>
    </>
}
