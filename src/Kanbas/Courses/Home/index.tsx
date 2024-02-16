// import ModuleList from "../Modules/List";


// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//       <ModuleList />
//       <h2>Status</h2>
//       <ModuleList />
//     </div>
//   );
// }
// export default Home;

// import ModuleList from "../Modules/List";
// import './Home.css'; 

// function Home() {
//   return (
//     <div className="container">
//       <div className="main-content">
//         <h2>Home</h2>
//         <ModuleList />
//       </div>
//       <div className="status-content">
//         <h2>Course Status</h2>
//         <ModuleList />
//       </div>
//     </div>
//   );
// }
// export default Home;


import React from 'react';
import './Home.css';
import ModuleList from "../Modules/List";
import CourseStatus from './CourseStatus'; 

function Home() {
  return (
    <div className="container">
      <div className="main-content">
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="status-content">
        <CourseStatus />
      </div>
    </div>
  );
}

export default Home;
