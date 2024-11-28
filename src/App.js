import React, {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey = 'bd298916346901616e8cd1fba53883e52e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = ( ) =>{

    useEffect(() =>{
        alanBtn({
            key:alanKey,
            onCommand:({command})=>{
                if(command === 'testCommand'){
                    alert('This code was executed')
                }
            }
        })
    },[]);

    return(
        <div> 
            <h1>ALAN AI React news Application</h1>
        </div>
    );
}

export default App;