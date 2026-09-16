import React,{useState,useEffect} from "react";
import axios from 'axios';
const App = () =>{
  const [user,setUser] = useState([]);
//using fetch method
  // useEffect(()=>{
  // fetch("https://jsonplaceholder.typicode.com/users")
  // .then((response)=>response.json())
  // .then((data)=>setUser(data))
  // .catch((error)=>console.log(error))
  // },[])
  
  //using axios
    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return(
    <div>
      <h1>User's</h1>
      <ul>
      {
       user.map((x)=>(
        <li key={x.id}>{x.name}</li>
       ))
      }
      </ul>
    </div>
  )
}

export default App