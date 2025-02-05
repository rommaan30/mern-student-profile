// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const StudentList = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       const response = await fetch('http://localhost:8000/api/students', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       const data = await response.json();
//       setStudents(data);
//     };
//     fetchStudents();
//   }, []);

//   const deleteStudent = async (id) => {
//     await fetch(`http://localhost:8000/api/students/${id}`, {
//       method: 'DELETE',
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     });
//     setStudents(students.filter(student => student._id !== id));
//   };

//   return (
//     <div>
//       <h2>Students</h2>
//       <ul>
//         {students.map(student => (
//           <li key={student._id}>
//             <p>{student.name}</p>
//             <Link to={`/students/edit/${student._id}`}>Edit</Link>
//             <button onClick={() => deleteStudent(student._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentList;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styling

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // Fetch all students from the server
  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('http://localhost:8000/api/students', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Authorization header with JWT token
        },
      });
      const data = await response.json();
      setStudents(data);
    };

    fetchStudents();
  }, []);

  // Handle student deletion
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    if (confirmDelete) {
      await fetch(`http://localhost:8000/api/students/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setStudents(students.filter(student => student._id !== id)); // Remove the deleted student from the state
    }
  };

  return (
    <div className="container mt-5">
      <h2>Student List</h2>
      <Link to="/student/add" className="btn btn-success mb-3">Add New Student</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Education</th>
            <th>Institution Name</th>
            <th>Company Name</th>
            <th>Skills</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.username}</td>
              <td>{student.email}</td>
              <td>{student.education}</td>
              <td>{student.institutionName}</td>
              <td>{student.companyName}</td>
              <td>{student.skills}</td>
              <td>
                <Link to={`/student/edit/${student._id}`} className="btn btn-primary btn-sm">Edit</Link>
                <button
                  onClick={() => handleDelete(student._id)}
                  className="btn btn-danger btn-sm ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
