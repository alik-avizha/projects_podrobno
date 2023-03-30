import React, {useState} from 'react';


type UnControlledOnOffPropsType = {
    setOn : (value: boolean) => void
    defaultOn?: boolean
}

export function UnControlledOnOff(props: UnControlledOnOffPropsType) {

    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: !on ? 'red' : 'white'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClickedHandler = () => {
        setOn(true)
        props.setOn(true)
    }
    const offClickedHandler = () => {
        setOn(false)
        props.setOn(false)
    }


    return (
        <div>
            <div style={onStyle} onClick={ onClickedHandler} >On</div>
            <div style={offStyle} onClick={ offClickedHandler }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

