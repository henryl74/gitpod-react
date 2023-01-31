import React, {useState} from 'react'
import UseEffectCounter3 from './UseEffectCounter3';

function UseEffectCounterContainer() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={ () => {
                setDisplay(!display)
            }}>
                Toggle Display
            </button>
            {display && <UseEffectCounter3 />}
        </div>
    )
}

export default UseEffectCounterContainer