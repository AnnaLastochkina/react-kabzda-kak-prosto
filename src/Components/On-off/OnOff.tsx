import React, {useState} from 'react';

type OnOffButtonType = {
    isOn: boolean

}


const OnOff = (props: OnOffButtonType) => {

    let [on, setOn] = useState(false)

    const onStyle = {
        height: '30px',
        width: '40px',
        backgroundColor: on ? 'green' : 'white',
        display: 'inline-block',
        border: '1px solid black',
    }
    const offStyle = {
        height: '30px',
        width: '40px',
        backgroundColor: on ? 'white' : 'red',
        display: 'inline-block',
        border: '1px solid black',
    }
    const indicatorStyle = {
        border: '2px solid black',
        height: '20px',
        width: '20px',
        borderRadius: '50%',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red',
    }

    return (
        <div>
            <div style={onStyle} isOn = {true}>ON</div>
            <div style={offStyle} isOn = {false}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;