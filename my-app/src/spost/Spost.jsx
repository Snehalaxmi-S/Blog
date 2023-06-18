import "./spost.css";
import img3 from "./img3.jpg";

export default function Spost() {
  return (
    <div className="spost">
        <img className="postImg" src={img3} alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet 
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam deleniti neque eveniet, fuga assumenda, minus aliquid iste perferendis tempore pariatur dolores nisi. Voluptatibus harum dolorum fugiat itaque fugit aliquid!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam deleniti neque eveniet, fuga assumenda, minus aliquid iste perferendis tempore pariatur dolores nisi. Voluptatibus harum dolorum fugiat itaque fugit aliquid!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam deleniti neque eveniet, fuga assumenda, minus aliquid iste perferendis tempore pariatur dolores nisi. Voluptatibus harum dolorum fugiat itaque fugit aliquid!</p>
    </div>
  )
}
