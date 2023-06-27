import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost3 from "../../components/singlePost/SinglePost3";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
        <SinglePost3 />
        <Sidebar/>
    </div>
  )
}
