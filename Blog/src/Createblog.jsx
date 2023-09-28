import { useContext } from 'react'
import './Createblog.css'
import { Bcontext } from './context/Bcontext'
import { Link } from 'react-router-dom'



function Createblog() {
   const {post,setPost}=useContext(Bcontext)
  
   const handleSUbmit=(e)=>{
    e.preventDefault()
    
    const Title=e.target.title.value
    const Blog=e.target.blog.value

    setPost((current)=>[...current,{id:Date.now(),title:Title,blog:Blog}])
   
    e.target.reset()
    alert('Blog posted successfully')
   }
   console.log(post);
   
  return (
    <>
    <div className="blog">
  
     <form className="blog_form" onSubmit={handleSUbmit}>
        <div className="blog_title">
            <h2>TITLE</h2>
            <input type="text" id='title' />
             </div>
           <div className="blog_body">
             <h2>BLOG</h2 >
            <input type="text" id='blog' style={{height:'200px'}} /> <br />
            <button type="submit" style={{marginTop: '20px'}}> Click here</button>
            </div>
            <p>Click see the current <Link to='viewblog'>Blogs ?</Link></p>
        </form>
        

    </div>
    
    </>
  )
}

export default Createblog