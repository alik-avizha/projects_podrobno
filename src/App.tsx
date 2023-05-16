import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from './components/Rating/Rating';
import {Select} from './components/Select/Select';
import {AnalogClock} from './components/Clock/CLock';

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [on, setOn] = useState(false)

    const [value, setValue] = useState<string>('Kiev')

    const items = [
        {value: '1', title: 'Kiev'},
        {value: '2', title: 'Piter'},
        {value: '3', title: 'Minsk'},
        {value: '4', title: 'Parizh'},
    ]

    const onChangeHandler = (value: any) => {
        setValue(value)
    }

    return (
        <div className="App">

            <Select value={value} onChange={onChangeHandler} items={items}/>

            {/*<UnControlledOnOff setOn={setOn}  /> {on.toString()}*/}
            {/*<OnOff setOn={setOn} on={on}/>*/}

            {/*<Accordion titleValue={'Menu'} setCollapsed={setCollapsed} collapsed={collapsed}  items={[{title: 'Aleks', value: 1}, {title: 'Ivan', value: 2}, {title: 'Igor', value: 3}]} onClick={(id)=>{alert(id)}}/>*/}
            {/*<UnControlledAccordion titleValue={'UnControlled Menu'} />*/}

            {/*<UnControlledRating />*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}

            {/*<AnalogClock/>*/}

         </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
