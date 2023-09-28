
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Createblog from './Createblog'
import { Bcontext } from './context/Bcontext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Viewblog from './Viewblog';

function App() {
  const [post,setPost]=useState([])
  // const [blog,setBlog]=useState([])
  return (
    <>
      <div>
      <Bcontext.Provider value={{post,setPost}}>
        <Routes>
          <Route path='/' element={<Createblog/>}/>
          <Route path='/viewblog' element={<Viewblog/>}/>
          
        </Routes>
        </Bcontext.Provider>
      </div>
      
    </>
  )
}

export default App
