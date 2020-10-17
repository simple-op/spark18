import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function Main() {

const portugal = useSelector(state=>state.Portugal)
const nicaragua=useSelector(state=>state.Nicaragua)
const  marshalIslands=useSelector(state=>state.marshalIslands)
c 
const [_name,setName]= useState(name)



    return (
        <div>
            <ul>
           {portugal&&portugal.map(v=>
            <li>
            
                 {v}
                
                </li>
            
            )}
            </ul>


        </div>
    )
}

export default Main
