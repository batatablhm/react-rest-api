import './ALL.css';
import {Link} from "react-router-dom";
const Login=()=>{
    return(
<>
    <head>
        <nav>
            <div className="topnav">
                <Link className="active" href="/">Home</Link>
                <Link href="/Login">login</Link>
                <input type="text" placeholder="Search.."/>
              </div>
        </nav>
    </head>
    <main>
        <p style="margin-top: 15px;"> User Name:<input type="text"  size="29" name="UserName" id="UserName"/></p>
        <p style="margin-top: 15px;"> password:<input type="text"  size="31" name="PassWord" id="Password"/></p>
        <button type="submit" id="login">login</button>
    </main>

</>
)}
export default Login;