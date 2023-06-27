import "./singlepost.css";
import img12 from "./img12.jpg";

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className="singlePostImg" src={img12} alt="" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className=" singlePostIcon far fa-edit"></i>
                    <i className=" singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>John</b></span>
                <span className="singlePostDate">1 hour ago</span>
               
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, consectetur sequi? Fugit assumenda provident dolorum suscipit laudantium iure sapiente reiciendis labore magnam! Delectus magnam distinctio animi illum iste nulla asperiores.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, consectetur sequi? Fugit assumenda provident dolorum suscipit laudantium iure sapiente reiciendis labore magnam! Delectus magnam distinctio animi illum iste nulla asperiores.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, consectetur sequi? Fugit assumenda provident dolorum suscipit laudantium iure sapiente reiciendis labore magnam! Delectus magnam distinctio animi illum iste nulla asperiores.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, consectetur sequi? Fugit assumenda provident dolorum suscipit laudantium iure sapiente reiciendis labore magnam! Delectus magnam distinctio animi illum iste nulla asperiores.
                </p>

        </div>
    </div>
  )
}
