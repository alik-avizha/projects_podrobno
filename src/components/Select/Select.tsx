import React, {useState} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const [edit, setEdit] = useState(false)


    return (
        <div className={s.wrapper}>
            <div onClick={()=>setEdit(!edit)} className={s.title}>{props.value}</div>
            {edit && props.items.map(i => <div onClick={()=>{
                props.onChange(i.title)
                setEdit(false)}}
            >{i.title}</div>)}
        </div>
    );
};
