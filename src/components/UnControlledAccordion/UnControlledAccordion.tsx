import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './Reducer';

type AccordionPropsType = {
    titleValue: string

}



function UnControlledAccordion(props: AccordionPropsType) {

    //const [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} collapsed={collapsed} setCollapsed={setCollapsed}/>*/}
            <AccordionTitle title={props.titleValue} onClick={()=>dispatch({type: TOGGLE_COLLAPSED})}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsTitle = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsTitle) {
    return (
            <h3 onClick={()=>props.onClick()} >--{props.title}--</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
    )
}

export default UnControlledAccordion;