import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'input'
};


export const UncontrolledInput = () => <input/>

export const ControlledInputWithFixedValue = () => <input value={'alo-alo'}/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actionValue = event.currentTarget.value
        setValue(actionValue)
    }

    return <><input onChange={onChange}/> - {value} </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <> <input ref={inputRef} />
            <button onClick={save}>save
            </button>
            - action value: {value}
        </>)
}
