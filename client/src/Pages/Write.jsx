import { useState } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Image from "@tiptap/extension-image"
import Placeholder from "@tiptap/extension-placeholder"
import axios from 'axios'
import { useLocation, useNavigate } from "react-router"
import moment from "moment"

function Write() {
  const state=useLocation().state
 const [title, setTitle] = useState(state?.title || "")
 const [content, setContent] = useState(state?.desc || "")
  const [file,setFile]=useState(null)
  const [cat, setCat]=useState(state?.cat || "")
const navigate=useNavigate();
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Placeholder.configure({
        placeholder: "Write your blog post...",
      }),
    ],
     content,
    onUpdate({ editor }) {
      setContent(editor.getHTML())
    },
  })
  const upload=async ()=>{
    try {
      const formData=new FormData();
      formData.append("file",file)
      const res=await axios.post("http://localhost:5000/api/upload",formData)
     return res.data
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick=async (e)=>{
    e.preventDefault();
    const imgUrl= await upload();

    try {
      state? await axios.put(
  `http://localhost:5000/api/posts/${state.id}`,
  {
    title,
    description: content, //value
    cat,
    img: file ? imgUrl : ""
  },
  { withCredentials: true }
):  await axios.post(
  "http://localhost:5000/api/posts/",
  {
    title,
    description: content,//value
    cat,
    img: file ? imgUrl : "",
    date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
  },
  { withCredentials: true }
  
);
navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Toolbar */}
        {editor && (
          <div className="toolbar">
            <button className="buttons" onClick={() => editor.chain().focus().toggleBold().run()}>
              Bold
            </button>

            <button onClick={() => editor.chain().focus().toggleItalic().run()}>
              Italic
            </button>

            <button
            className="buttons"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
            >
              H2
            </button>

            {/* <button
              onClick={() => {
                const url = prompt("Enter image URL")
                if (url) editor.chain().focus().setImage({ src: url }).run()
              }}
            >
              Image
            </button> */}
          </div>
        )}

        {/* Editor */}
        <div className="editorContainer">
          <EditorContent className="editor"  editor={editor} />
        </div>
      </div>

      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
           <b> Status: </b> Draft
          </span>
          <span>
           <b> Visibility: </b> Public
          </span>
          <input style={{display:"none"}} type="file" name="" id="file" onChange={(e) => setFile(e.target.files[0])}  />
          <label className="file" htmlFor="file">Upload Images</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
       <div className="item">
  <h1>Category</h1>

  <input
    type="radio"
    name="cat"
    value="art"
    checked={cat === "art"}
    onChange={(e) => setCat(e.target.value)}
  />
  <label htmlFor="art">ART</label>

  <input
    type="radio"
    name="cat"
    value="science"
    checked={cat === "science"}
    onChange={(e) => setCat(e.target.value)}
  />
  <label htmlFor="science">SCIENCE</label>

  <input
    type="radio"
    name="cat"
    value="technology"
    checked={cat === "technology"}
    onChange={(e) => setCat(e.target.value)}
  />
  <label htmlFor="technology">TECHNOLOGY</label>

  <input
    type="radio"
    name="cat"
    value="cinema"
    checked={cat === "cinema"}
    onChange={(e) => setCat(e.target.value)}
  />
  <label htmlFor="cinema">CINEMA</label>

  <input
    type="radio"
    name="cat"
    value="design"
    checked={cat === "design"}
    onChange={(e) => setCat(e.target.value)}
  />
  <label htmlFor="design">DESIGN</label>

  <input
    type="radio"
    name="cat"
    value="food"
    checked={cat === "food"}
    onChange={(e) => setCat(e.target.value)}
  />
  <label htmlFor="food">FOOD</label>
</div>
      </div>
    </div>
  )
}

export default Write