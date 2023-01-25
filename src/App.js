
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'  

import './App.css';
import Admin from './routes/Admin';
import User from './routes/User'

function App() {
  return (
    <div >
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
