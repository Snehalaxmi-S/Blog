import "./sidebar.css";
import hey from "./hey.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sidebarImg" src={hey} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, at unde? Corporis nemo quaerat autem vitae ea dolorum modi! Laborum deserunt ipsum saepe ab ut quae unde optio iste vero!</p>

        </div>
        <span className="sidebarTitle">CATEGORIES</span>
        <div className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>

        </div>
        </div>
    </div>
   
  )
}
