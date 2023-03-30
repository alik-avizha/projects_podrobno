import React from 'react';

export type AccordionPropsType = {
    /**
     * It is name of title
     **/
    titleValue: string
    /**
     * It is callback that changing Menu or Users (collapsed and unCollapsed)
     **/
    setCollapsed: (value: boolean) => void
    collapsed: boolean
    /*
    * Optional color of header text
    * */
    color?: string
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed}
            color ={props.color}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsTitle = {
    collapsed: boolean
    title: string
    setCollapsed: (value: boolean) => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsTitle) {
    return (
        <>
            <h3 style={{color: props.color ? props.color : 'black'}} onClick={() => props.setCollapsed(!props.collapsed)}>--{props.title}--</h3>
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