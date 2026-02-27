import React,{useState,  useEffect,  useContext} from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../Components/Menu'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../context/authContext';
import DOMPurify from "dompurify";
function Single() {
  const [post,setPost]=useState({});
  const location=useLocation()
  const postId=location.pathname.split("/")[2]
  const {currentUser}=useContext(AuthContext);
  const navigate=useNavigate();
useEffect(()=>{
  const fetchData=async ()=>{
    try {
    const res=await axios.get(`http://localhost:5000/api/posts/${postId}`);
    setPost(res.data);
  } catch (error) {
    console.log(error);
  }
  };
  fetchData();
},[postId]);
const handleDelete=async ()=>{
  try {
    await axios.delete(`http://localhost:5000/api/posts/${postId}`);
    navigate("/");
  } catch (error) {
    console.log(error);
  }
}
 const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  return (
    <div className="single">
      <div className="content">
        <img src={`/upload/${post.img}`} alt="" />
        <div className="user">
          {
            post.userImage && <img src={post.userImage} alt="" />}
          <div className="user-info">
            <span>{post.username} </span>
            <span>  posted  {moment(post.date).fromNow()} </span>
          </div>
          {currentUser.username===post.username && (<div className="edit">
            <Link to={`/write?edit=2`} state={post}>
             <img src={Edit} alt="" />
             </Link>
           
            <img onClick={handleDelete} src={Delete} alt="" />
          </div>)}
        </div>
        <h1>
          {post.title}
        </h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.description),
          }}
        ></p> 
       
      </div>
      <div className="menu">
        <Menu cat={post.cat} />
      </div>
    </div>
  )
}

export default Single