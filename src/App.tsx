import React, {useState} from 'react';
import './App.css';
import {Rating,RatingValueType} from "./Components/Rating/Rating";
import Accordion from "./Components/Accordion/Accordion";
import OnOff from "./Components/onOff/onOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./Components/UncontrolledOnOff/UncontrolledOnOff";
import {
    ControlledCheckbox,
    ControlledInput, ControlledSelect, GetValueTrackValueUncontrolledInputByButton,
    UncontrolledInput
} from "./Components/UncontrolledInput/UncontrolledInput";
import {SelectWithValue} from "./Components/Select/Select";
import {Example1} from "./Components/onOff/ReactMemo";
import {DifficultCountingExample, HelpsToReactMemo, LikeUseCallbackMemo} from "./Components/onOff/UseMemo";
import UseState from "./Components/UseState/UseState";



function App(props: any) {
    console.log('App rendering');

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    let [accordionCollapsed, setCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    // const onClickHandler = () => console.log('some item was clicked')
    const[value,setValue] = useState('0')

    return (
        <div className={'App'}>

            {/*<Example1/>*/}
            {/*<HelpsToReactMemo/>*/}
            <UseState/>
            {/*<LikeUseCallbackMemo/>*/}
            {/*<DifficultCountingExample/>*/}
            {/*<SelectWithValue*/}
            {/*    onChange={setValue}*/}
            {/*    value={value}*/}
            {/*    items={[*/}
            {/*    {title: 'Minsk', value: '1'},*/}
            {/*    {title: 'Moscow', value: '2'},*/}
            {/*    {title: 'Kiev', value: '3'}*/}
            {/*    ]} />*/}

            {/*<hr/>*/}

            {/*<OnOff on={switchOn} onChange={ setSwitchOn } />*/}
            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
            {/*<UncontrolledInput />*/}
            {/*<GetValueTrackValueUncontrolledInputByButton/>*/}
            {/*<ControlledInput  />*/}
            {/*<ControlledCheckbox/>*/}
            {/*<ControlledSelect/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={accordionCollapsed}*/}
            {/*           onChange={() => {setCollapsed(!accordionCollapsed)}}*/}
            {/*           onClick={(id) => {alert(`user with ID ${id} happy`)}}*/}
            {/*           items={[*/}
            {/*               {title: 'Dimych', value: '1'},*/}
            {/*               {title: 'Diana', value: '2'},*/}
            {/*               {title: 'Karina', value: '3'}*/}
            {/*           ]}/>*/}

            {/*<SelectWithoutValue items={[*/}
            {/*    {title: 'Minsk', value: '1'},*/}
            {/*    {title: 'Moscow', value: '2'},*/}
            {/*    {title: 'Kiev', value: '3'}]} />*/}

            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}


            {/*<UncontrolledAccordion titleValue ={'Menu'} />*/}
            {/*<UncontrolledAccordion titleValue ={'Users'} />*/}
            {/*<UncontrolledRating />*/}

            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

// type PageTitlePropsTYpe = {
//     title: string
// }
//
// function PageTitle(props: PageTitlePropsTYpe) {
//     console.log('AppTitle rendering')
//     return <h1> { props.title } </h1>
// }

export default App;
