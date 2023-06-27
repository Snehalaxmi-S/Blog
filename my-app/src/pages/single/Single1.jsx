import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost1 from "../../components/singlePost/SinglePost1";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
        <SinglePost1 />
        <Sidebar/>
    </div>
  )
}
