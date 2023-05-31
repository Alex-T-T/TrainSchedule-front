
import './App.css';

import { Routes, Route } from 'react-router-dom';

import { Home, NotFoundPage } from './Pages'
import { Layout, Schedule } from './Components';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path='schedule' element={<Schedule />} /> */}
      </Route>
      <Route path='*' element={<NotFoundPage />} />

    </Routes>

  );
}

export default App;
