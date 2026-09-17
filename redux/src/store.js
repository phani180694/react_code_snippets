// import {createStore} from "redux";
import {createStore} from "redux"

const rootReducer = (state={age:24,count:0},action)=>{
if(action.type === "incAge") return {...state,age:state.age+1}
if(action.type === "decAge") return {...state,age:state.age-1}
if(action.type === "incCount") return {...state,count:state.count+1}
if(action.type === "decCount") return {...state,count:state.count-1}
return state;
}

const store = createStore(rootReducer);
export default store;

export const ageSelector = (state) =>{
    return state.age;
}

export const countSelector = (state) =>{
    return state.count;
}


