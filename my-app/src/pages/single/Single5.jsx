import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost5 from "../../components/singlePost/SinglePost5";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
        <SinglePost5 />
        <Sidebar/>
    </div>
  )
}
