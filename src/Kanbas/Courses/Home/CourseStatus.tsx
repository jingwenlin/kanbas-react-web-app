import React from 'react';
import './CourseStatus.css'; 

function CourseStatus() {
  return (
    <div className="course-status">
      <h2>Course Status</h2>
      <ul>
        <li><button>Import Existing Content</button></li>
        <li><button>Import from Commons</button></li>
        <li><button>Choose Home Page</button></li>
        <li><button>View Course Stream</button></li>
        <li><button>New Announcement</button></li>
        <li><button>New Analytics</button></li>
        <li><button>View Course Notifications</button></li>
      </ul>
    </div>
  );
}

export default CourseStatus;
