import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/home/Home'
import Layout from './Components/layout/Layout'
import Blog from './Components/blog/Blog'


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/blogs' element={<Blog/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
