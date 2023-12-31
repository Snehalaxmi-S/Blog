import './topstyle.css';
import profile from './profile.png';
import { Link } from "react-router-dom";

export default function TopBar() {
  const user = false;
  return (
    <div className='topi'>
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/" >HOME</Link>
          </li>
          <li className="topListItem"><Link className="link" to="/contact" >CONTACT</Link></li>
          <li className="topListItem"><Link className="link" to="/write" >WRITE</Link></li>
          <li className="topListItem"><Link className="link" to="/settings" >SETTINGS</Link></li>
          {/* <li className="topListItem">
            {user && "LOGOUT"}
          </li> */}
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img className='topImg' src={profile} alt="" />

          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                <Link className="link" to="/login" >
                  LOGIN
                </Link>
              </li>
              <li className='topListItem'>
                <Link className="link" to="/register" >
                  REGISTER
                </Link>
              </li>
              
            </ul>

          )

        }
        <i className="topSearch fas fa-search"></i>
      </div>
    </div>
  )
}
