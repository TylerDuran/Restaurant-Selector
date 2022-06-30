import { Link, Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import DisplayOne from "./components/DisplayOne";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Random from "./components/Random";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Indecisiveness Simplified</h1>
      <Link className='button3 button-3' to="/">Dashboard</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link className='button3 button-3' to="/create">Add a Resturant</Link>
      <hr />
      <h2>Fixing your significant others inability to choose a place to eat...</h2>
      <Routes>

        {/* ------ MAIN - ALL Restaurants ---------------------------------- */}
        <Route path='/restaurants' element={<Dashboard />} />
        {/* //////////////////////////////////////////////////////////// */}

        {/* ------ SHOW ONE -------------------------------------------- */}
        <Route path='/restaurants/:id' element={<DisplayOne />} />
        {/* //////////////////////////////////////////////////////////// */}


        {/* ------ CREATE -----------------------------------------------*/}
        <Route path='/create' element={<Create />} />
        {/* //////////////////////////////////////////////////////////// */}


        {/* ------ Edit/Update ---------------------------------------------- */}
        <Route path="/update/:id" element={<Edit />} />
        {/* //////////////////////////////////////////////////////////// */}

        {/* ------ Random ---------------------------------------------- */}
        <Route path="/places/random" element={<Random />} />
        {/* //////////////////////////////////////////////////////////// */}

        {/*  ------ REDIRECT ------------------------------------------- */}
        <Route path='*' element={<Navigate to="/restaurants/" replace />} />
        {/* //////////////////////////////////////////////////////////// */}

      </Routes>


    </div>
  );
}

export default App;
