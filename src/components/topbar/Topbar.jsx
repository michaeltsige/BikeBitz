import { Link } from "react-router-dom";
import pp from "../../assets/pp.jpg";
import "./topbar.css";

export default function Topbar() {
  const user = true;
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

          <Link className="link" to="/accounts">
            <img
              className="topImg"
              src={pp}
              alt=""
            />
          </Link>

        {/* <i className="topSearchIcon fas fa-search"></i> */}
      </div>
    </div>
  );
}
