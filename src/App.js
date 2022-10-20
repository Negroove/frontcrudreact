import logo from './logo.svg';
import './App.css';
import React from 'react';
import CompShowBlogs from './blog/ShowBlogs.js'  
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  //<Route path='/create' element={ <CompCreateBlog />} />
  //<Route path='/edit/:id' element={ <CompEditBlog />} />
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowBlogs />} />
        </Routes>
      </BrowserRouter>    </div>
  );
}
export default App;
