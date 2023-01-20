
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'  

import './App.css';
import User from './routes/User'

function App() {
  return (
    <div >
     <Router>
      <Routes>
        <Route path="/*" element={<User/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
