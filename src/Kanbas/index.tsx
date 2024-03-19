import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import Courses from "./Courses";

import Database from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState<any[]>(Database.courses);
  const [course, setCourse] = useState({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <div>
          <KanbasNavigation />
        </div>
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
            {<Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}/>
            } /> }
            <Route path="/Account" element={<h1>Account</h1>} />
            {/* <Route path="/Courses/:cid/*" element={<Courses />} />
          </Routes> */}
            {/* <Route path="/Courses/:cid/*" element={<Courses />} /> */}
            <Route path="Courses/:courseId/*" element={
              <Courses courses={courses} />} />
            </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;


// function Kanbas() {
//   const [courses, setCourses] = useState<any[]>(Database.courses);
//   const [course, setCourse] = useState({
//     _id: "1234", name: "New Course", number: "New Number",
//     startDate: "2023-09-10", endDate: "2023-12-15",
//   });
//   const addNewCourse = () => {
//     setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
//   };
//   const deleteCourse = (courseId: any) => {
//     setCourses(courses.filter((course) => course._id !== courseId));
//   };
//   const updateCourse = () => {
//     setCourses(
//       courses.map((c) => {
//         if (c._id === course._id) {
//           return course;
//         } else {
//           return c;
//         }
//       })
//     );
//   };
//   return (
//     <div className="d-flex">
//       <KanbasNavigation />
//       <div>
//         <Routes>
//           <Route path="/" element={<Navigate to="Dashboard" />} />
//           <Route path="Account" element={<h1>Account</h1>} />
//           <Route path="Dashboard" element={
//             <Dashboard
//               courses={courses}
//               course={course}
//               setCourse={setCourse}
//               addNewCourse={addNewCourse}
//               deleteCourse={deleteCourse}
//               updateCourse={updateCourse}/>
//           } />
//           <Route path="Courses/:courseId/*" element={
//             <Courses courses={courses} />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }
// export default Kanbas;


