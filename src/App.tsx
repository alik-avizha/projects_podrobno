import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UnControlledOnOff} from './components/UnControlledOnOff/UnControlledOnOff';
import UnControlledAccordion from './components/UnControlledAccordion/UnControlledAccordion';
import {Accordion} from './components/Accordion/Accordion';

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [on, setOn] = useState(false)


    return (
        <div className="App">

            <UnControlledOnOff setOn={setOn}  /> {on.toString()}
            {/*<OnOff setOn={setOn} on={on}/>*/}

            <Accordion titleValue={'Menu'} setCollapsed={setCollapsed} collapsed={collapsed}/>
            <UnControlledAccordion titleValue={'UnControlled Menu'} />

            {/*<UnControlledRating />*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>

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
