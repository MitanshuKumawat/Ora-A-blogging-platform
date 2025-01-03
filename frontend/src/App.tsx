import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Signup} from './pages/Signup'
import {Signin} from './pages/Signin'
import {Blog} from './pages/Blog'
import {Blogs} from './pages/Blogs'
import {Publish} from './pages/Publish'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/blog/:id" element={<Blog/>}></Route>
          <Route path="/blog/bulk" element={<Blogs/>}></Route>
          <Route path="/blog/publish" element={<Publish/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
