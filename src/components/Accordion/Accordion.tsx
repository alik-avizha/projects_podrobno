import React from 'react';

type AccordionPropsType = {
    titleValue: string
    setCollapsed: (value: boolean) => void
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsTitle = {
    collapsed: boolean
    title: string
    setCollapsed:(value: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsTitle) {
    return (
        <>
            <h3 onClick={()=>props.setCollapsed(!props.collapsed)}>--{props.title}--</h3>
        </>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}