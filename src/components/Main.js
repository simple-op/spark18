import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function Main() {

const name = useSelector(state=>state.name)

const [_name,setName]= useState(name)

const change = ()=>{
    setName("wdwjsd")
}

    return (
        <div>
            {_name}


            <button onClick={
                change
            }>abcd</button>
        </div>
    )
}

export default Main
