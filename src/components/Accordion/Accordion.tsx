import React from 'react';

type ItemType = {
    title: string
    value: any
}

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
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed}
                            color={props.color}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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
            <h3 style={{color: props.color ? props.color : 'black'}}
                onClick={() => props.setCollapsed(!props.collapsed)}>--{props.title}--</h3>
        </>
    )
}

export type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyType) {
    console.log('AccordionBody rendering')
    return (
        <>
            <ul>
                {props.items.map((el,index) => <li onClick={()=>{props.onClick(el.value)}} key={index}>{el.title}</li>)}
            </ul>
        </>
    )
}