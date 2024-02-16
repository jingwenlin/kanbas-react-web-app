import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Labs from './Labs';
// import Labs2 from './Labs/labs';
import Kanbas from './Kanbas';
import HelloWorld from './Labs/a3/hello';
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate} from "react-router";
import { Link} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
      {/* <Link to="/hello">Hello World</Link>|
      <Link to="/Labs/a3">Labs</Link>|
      <Link to="/Kanbas ">Kanbas </Link> */}
        <Routes>
        <Route path="/" element={<Navigate to="/Labs/a3" />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
