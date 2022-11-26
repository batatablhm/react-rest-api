import './ALL.css';
import {Link} from "react-router-dom";
const Register=()=>{
    return(
    <>
<head>
    <nav>
        <div className="topnav">
        <Link className="active" href="/">Home</Link>
            <Link href="/Login">login</Link>
            <input
            type="text"
            placeholder="Search.."
            />
          </div>
    </nav>
</head>
<main>
    <p style="margin-top: 15px;">mail-adress:<input type="text"  size="29" name="mailAdress" id="mailAdress"/></p> 
    <p style="margin-top: 15px;"> User Name:<input type="text"  size="29" name="UserName" id="UserName"/></p>
    <p style="margin-top: 15px;"> password:<input type="text"  size="31" name="PassWord" id="Password"/></p>
    <button type="submit" id="register">register</button>
</main>

</>
)}
export default Register;