import { useState } from "react";

function Form () {

    const [ username , setUsername] = useState("") ; 
    const [ email , setEmail] = useState("") ; 
    const [role , setRole] = useState("admin");
    const [gender , setGender] = useState("");
    const [accept , setAccept] = useState(false)



    const usernameHandler = (e) => {
        setUsername(e.target.value);
    }
    
    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const roleHandler = (e) => {
        setRole(e.target.value)
    }

    const genderHandler = (e) => {
      setGender(e.target.value)
  }

  const acceptHandler = (e) => {
    setAccept(e.target.checked)
}

    const logHandler = () => {
        console.log(username , email , role , gender , accept );
    }

    
    return ( 

        <>
            <h1>i m a form</h1>
            <br />
            <input type="text" onChange={usernameHandler} value={username} placeholder="Enter your Username" />
            <br />
            <input type="email" name="email" id="email" value={email} onChange={emailHandler}  placeholder="example namid@mail.com" />
            <br />
            <select name="role" id="role" onChange={roleHandler}>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="writer">Writer</option>
            </select>
            <br /><br />
            <div>
              <label>male<input type="radio" name={gender} value="male" onChange={genderHandler}/></label>
              <label>female<input type="radio" name={gender} value="female" onChange={genderHandler}/></label>
              <label>others<input type="radio" name={gender} value="others" onChange={genderHandler}/></label>
            </div>

          <label>accept policy<input type="checkbox" name="accept" onChange={acceptHandler}  checked={accept}/></label>
            <br /><br />
            <button onClick={logHandler}>Logger</button>
        </>
     );
}

export default Form ;