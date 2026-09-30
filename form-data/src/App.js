import React,{useState} from "react";


const App = () => {

  const [formData,setFormData] = useState({name : "",email:""});
  const [submitData,setSubmitData] =useState(null);

  const handleChange = (e) => {
   const {name, value} = e.target;
   setFormData((prev)=>({
    ...prev,[name]:value,
   }))
   console.log("formData",formData);
  }

  const handleSubmit = (e) =>{
  e.preventDefault();
  console.log("formData",formData);
  setSubmitData(formData);
  setFormData({name : "",email:""})
  }
  return(
    <div>
      <h2>sample form</h2>
      <form onSubmit={handleSubmit}>
     <div>
      <label>Name </label>
      <input type="text" name="name" placeholder="enter your name"  onChange={handleChange}></input>
     </div>
     <div>
      <label>Email  </label>
      <input type="email" name="email" placeholder="enter your email"  onChange={handleChange}></input>
     </div>
     <button>submit</button>
     </form>
     {submitData && (
      <div>
      <p>
        <h1>{submitData.name}</h1>
      </p>
      <p>
        <h1>{submitData.email}</h1>
      </p>
      </div>
     )}
    </div>
  )
}

export default App;