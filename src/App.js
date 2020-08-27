import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Course from './components/Courses/Course';
import courses from './fakeData/Courses';


function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <div className="main-body container">
          <Course courses={courses}></Course>
      </div>
      <footer className="footer-design">
        <h6>All right Reserved &copy; 2020</h6>
        <h6>Design By Srabanty</h6>
      </footer>
    </div>

    
  );
}

export default App;
