import React,{useState} from 'react'
//import FormRow from './FormRow';
import { useNavigate } from 'react-router-dom';
import Hero from '../assets/4164095.jpg';
import '../assets/loginform.css';
const Signup1 = () => {
    const n=useNavigate()
       let Gohome=()=> {
          n('/')
        }
        /*if(password==" " || email==" "){
    
        alert("fill the empty fields")
      }*/
      let[name, setName]=useState('');
      let [email, setEmail] = useState('');
      let [password, setPassword] = useState('');
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Handle login logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    
    
        // Reset form fields
        setName('');
        setEmail('');
        setPassword('');  
      }
    
  return (
    <main>
         <div className='hero'>
        <img src={Hero} alt='Hero image' className='hero_img' />
      </div>
      <div className='overlay1'>
      <div className='back'>
      <form class="form" onSubmit={handleSubmit} action=" " style={{borderWidth:'2mm',backgroundColor:'lightgray', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
         <h2>Signup</h2><hr></hr>
         <div class="div3" style={{paddingBottom:'20px'}}>
          <label style={{backgroundColor:'lightgrey'}}>Name:</label><br></br>
          <input  required  class="c5" type="name"  color='white' placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)}/><br></br>
        </div >
        <div class="div2"style={{paddingBottom:'10px'}}>
          <label style={{backgroundColor:'lightgrey'}}>Email:</label><br></br>
          <input   required  class="c4"   type="email"  color='white' placeholder='enter email' value={email}  onChange={(e)=>setEmail(e.target.value)}/><br></br>
        </div>
        <div class="div3" style={{paddingBottom:'20px'}}>
          <label style={{backgroundColor:'lightgrey'}}>Password:</label><br></br>
          <input  required  class="c5" type="password"  color='white' placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)}/><br></br>
        </div >
        <div style={{backgroundColor:'lightgrey'}}>
            <a href='#'  style={{backgroundColor:'lightgrey'}} >forget password?</a>
        </div>
        <button class="btn" type="submit"  onClick={Gohome}>Signup</button>
        
      </form>
     </div>
        </div>
        </main>
  )
}
export default Signup1;