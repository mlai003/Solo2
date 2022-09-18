import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import AddEvent from './components/AddEvent';
import Event from './components/Event';
import BegForm from './components/BegForm';

import OneUser from './components/OneUser';
import EditRace from './components/EditRace';



function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route  path = "/" element = {<Main />} />
          <Route path = "/addEvent" element = {<AddEvent />} />
          <Route path = "/events/:id" element = {<Event />} />
          <Route path = "/events/:id/beginner" element = {<BegForm />} />
          <Route path = "/events/users/:id" element = {<OneUser/>} />
          <Route path = "/events/edit/:id" element = {<EditRace/>} />
        </Routes>
      
      </BrowserRouter>
        
      
    </div>
  );
}

export default App;
