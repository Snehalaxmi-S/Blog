import "./header.css";
import img5 from "./img5.jpg";

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src={img5} alt="" />
    </div>
  )
}
