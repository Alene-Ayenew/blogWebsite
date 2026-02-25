// import React,{useState} from 'react'
// import ReactQuill from 'react-quill'
// import 'react-quill/dist/quill.snow.css';
// function Write() {
//   const [value, setValue]=useState('');
//   return (
//     <div className="add">
//       <div className="content">
//         <input type="text" name="" id="" placeholder='Title'/>
//         <div className="editorContainer">
//           <ReactQuill them="snow" value={value} onChange={setValue}/>
//         </div>
//       </div>
//       <div className="menu">
//         <div className="item">i1</div>
//         <div className="item"> i2</div>
//       </div>
//     </div>
//   )
// }

// export default Write


import { useState } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Image from "@tiptap/extension-image"
import Placeholder from "@tiptap/extension-placeholder"

function Write() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Placeholder.configure({
        placeholder: "Write your blog post...",
      }),
    ],
     content: content || null,
    onUpdate({ editor }) {
      setContent(editor.getHTML())
    },
  })

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
            <button onClick={() => editor.chain().focus().toggleBold().run()}>
              Bold
            </button>

            <button onClick={() => editor.chain().focus().toggleItalic().run()}>
              Italic
            </button>

            <button
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
          <input style={{display:"none"}} type="file" name="" id="file" />
          <label className="file" htmlFor="file">Upload Images</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name="cat" value='art' id="art" />
          <label htmlFor="art">ART</label>
          <input type="radio" name="cat" value='science' id="science" />
          <label htmlFor="science">SCIENCE</label>
          <input type="radio" name="cat" value='technology' id="technology" />
          <label htmlFor="technology">TECHNOLOGY</label>
          <input type="radio" name="cat" value='cinema' id="cinema" />
          <label htmlFor="cinema">CINEMA</label>
          <input type="radio" name="cat" value='design' id="design" />
          <label htmlFor="design">DESIGN</label>
          <input type="radio" name="cat" value='food' id="food" />
          <label htmlFor="food">FOOD</label>
        </div>
      </div>
    </div>
  )
}

export default Write