import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string

}

function UnControlledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} collapsed={collapsed} setCollapsed={setCollapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsTitle = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsTitle) {
    return (
        <>
            <h3 onClick={()=>props.setCollapsed(!props.collapsed)} >--{props.title}--</h3>
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

export default UnControlledAccordion;