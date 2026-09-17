import {Provider,useDispatch,useSelector} from "react-redux";
import store,{ countSelector,ageSelector } from "./store";

const Age = () =>{
  const dispatch = useDispatch();
  const incrementAge = () => {
    dispatch({type:"incAge"});
  }
  const decrementAge = () =>{
    dispatch({type:"decAge"});
  }
  return(
    <div>
      <h1>Age component</h1>
      <button onClick={incrementAge}>increment age</button>
      <button onClick={decrementAge}>decrement age</button>
    </div>
  )
} 

const Count = () =>{
  const dispatch = useDispatch();
  const incrementCount = () => {
    dispatch({type:"incCount"})
  }
  const decrementCount = () =>{
    dispatch({type:"decCount"});
  }
  return(
    <div>
      <h1>Count component</h1>
      <button onClick={incrementCount}>increment count</button>
      <button onClick={decrementCount}>decrement count</button>
    </div>
  )
}

const View = () =>{
  const count = useSelector((state)=>state.count);
  const age = useSelector((state)=>state.age);
  return(
    <div>
      <h1>View component</h1>
      <h1>Age:{age}</h1>
      <h1>COunt:{count}</h1>
    </div>
  )
}
const App = () =>{
  return(
    <div>
    <Provider store={store}>
      <View/>
      <Age/>
      <Count/>
    </Provider>
    </div>
  )
}
export default App;
