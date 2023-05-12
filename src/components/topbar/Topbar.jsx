import { Link } from "react-router-dom";
import pp from "../../assets/pp.jpg";
import "./topbar.css";

import { UsersContext } from "../../helpers/UserContext/UserDataContext";
import { useContext } from "react";

export default function Topbar() {
  
  const { users } = useContext(UsersContext);

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contactus">
            CONTACT
            </Link></li>
          <li className="topListItem">
            <Link className="link" to="/addbike">
              ADD BIKE
            </Link>
          </li>
          {/* {user && <li className="topListItem">LOGOUT</li>} */}
        </ul>
      </div>
      <div className="topRight">
      
        {users? 
          (<>
            <Link className="link" to="/accounts">
            <img
              className="topImg"
              src={pp}
              alt=""
            />
            </Link>
           <div className="topUserAddr"> <p>{users}</p></div>
          </>
          )
          :
          (
            <Link className="link" to="/accounts">
            <img
              className="topImg"
              src={pp}
              alt=""
            />
          </Link>
          )
        }
        
      </div>
    </div>
  );
}
