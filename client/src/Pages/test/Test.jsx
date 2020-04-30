import React from 'react'

import FirstTest from '../../components/test/FirstTest';
import SecondTest from '../../components/test/SecondTest';

const Test = props => {
    return (
        <div>
            <SecondTest userId={3} />
            <FirstTest userId={1} />
            
        </div>
    )
}

export default Test
