import './ALL.css';
import  {Link} from "react-router-dom" ;
const AddBooks=()=>{
    return(
<>
<head>
        <nav>
            <div className="topnav">
                <Link   className="active" href="/AddBooks">ADD</Link>
                <input type="text" placeholder="Search.."/>
              </div>
        </nav>
    </head>
    <div>
        <div className="NameUsers">
         <div style="display: inline;">
        <p>
         Name is:<input type="text" size="30" name="uploaded_by" id="uploaded-by"/>
        </p>
        </div>   
        </div>
        <div>
            <p style="margin-top: 15px;">Name of book:<input type="text"  size="24" name="title" id="title"/></p> 
            <p style="margin-top: 15px;"> summary:<input type="text"  size="29" name="descreption" id="descreption"/></p>
            <p style="margin-top: 15px;">number of page is: <input type="text" name="page" id="page"/></p>
            <p style="margin-top: 15px;">author name: <input type="text" size="25" name="author" id="author"/></p>
        </div>
        <button type="submit" id="AddBook">ADD</button>
    </div>

</>
)}
export default AddBooks;