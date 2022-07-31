import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/screens/Home/Home';
import Calendar from './components/screens/Calendar/Calendar';

const App = () => {
  return (
   <Routes>
    <Route path="/" element={ <Home /> }/>
    <Route path="/Calendar" element={ <Calendar/> }/>
   </Routes>
  )
}

export default App;