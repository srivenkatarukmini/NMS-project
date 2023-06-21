import React,{useState} from "react";
import FormRow from './FormRow';

const initialState = {
  email: '',
  password: '',
};
const Login = () => {

  const [values, setValues] = useState(initialState);
 const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e)=> {
    e.preventDefault();
  }
// { type, name, value, handleChange, labelText }
     return(
    <div className='back'>
        <form class="form" onSubmit={handleSubmit} style={{borderWidth:'2mm',backgroundColor:'lightgray', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
         <h3>SIGN UP</h3>
        
        <FormRow type='email' name='email' value={values.email} handleChange={handleChange}/>
        <FormRow type='password' name='password' value={values.password} handleChange={handleChange}/>
        
        <div style={{backgroundColor:'lightgrey'}}>
            <a href='#'  style={{backgroundColor:'lightgrey'}} >forget password?</a>
        </div>
        <button class="btn" type="submit">signup</button>
        
      </form>
      
    </div>
  )
     }

export default Login;

