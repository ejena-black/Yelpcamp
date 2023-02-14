import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Nav";
import Home from './components/Home';
import Login from './components/Register';
import Create from './components/Create Campground';
import CampDetails from './components/Campground Details';
import Dummy from './components/dummy';
import Edit from './components/Edit Campground';

function App() {

  // States
  const [theme, setTheme] = useState(false)



  const handleTheme = () => {
    const body = document.querySelector('body');
    // body.classList.toggle('darkmode')
    if(!theme){
      body.classList.add('darkmode')
      setTheme(true)
    } else{
      body.classList.remove('darkmode')
      setTheme(false)
    }
  }



  return (
    <BrowserRouter>
      <div className="App">
        <Navbar darkmode={ handleTheme}/>
        <Routes>
          {/* <Route path='/' element={ <Dummy/> }/> */}
          <Route path='/' element={<Home/>}/>
          <Route path=':campground_id' element={ <CampDetails/> }/>
          <Route path='/campgrounds/:campground_id' element={ <Edit/> }/>
          <Route path='login' element={ <Login/>}/>
          <Route path='create' element={ <Create/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
