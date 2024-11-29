import React, {useEffect, useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey = 'bd298916346901616e8cd1fba53883e52e956eca572e1d8b807a3e2338fdd0dc/stage'; //From Alan AI website

const App = ( ) =>{

    const[newsArticles,setNewsArticles] = useState([])

    useEffect(() =>{
        alanBtn({
            key:alanKey,
            onCommand:({command,articles})=>{
                if(command === 'newHeadlines'){
                    setNewsArticles(articles)
                    console.log('code was executed',articles);
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