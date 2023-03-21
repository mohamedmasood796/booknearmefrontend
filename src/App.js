
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'  

import './App.css';
import Admin from './routes/Admin';
import User from './routes/User'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='overflow-hidden' >
       <Toaster position="top-center" />
     <Router>
      <Routes>
        <Route path="/*" element={<User/>}/>
        <Route path="/admin*" element={<Admin/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
