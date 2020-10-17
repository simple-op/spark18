import {CHECK} from '../types';
const  initialState = {
    name:'ashu',
    ph:'tey8',

}





export const checkReducer = (state=initialState,action)=>{
    switch (action.type) {
        case CHECK: return {
            ...state,
            name:'asih'
        }
        default:return state
       
    }
}