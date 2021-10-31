import React from 'react';
import './App.css';
import Rating from "./Components/Rating/Rating";
import Accordion from "./Components/Accordion/Accordion";
import UncontrolledAccordion from "./Components/Uncontrolled Accordion/UncontrolledAccordion";
import OnOff from "./Components/On-off/OnOff";
import UncontrolledRating from "./Components/Uncontrolled Rating/Uncontrolled Rating";

function App() {
  return (<div>
      <Rating value={3}/>
      <Accordion titleValue={'Accordion'} collapsed={false} />
          <UncontrolledAccordion titleValue={'Uncontrolled Acc'} />
          <OnOff isOn={true}/>
          <UncontrolledRating />
      </div>
  )
}
export default App;
