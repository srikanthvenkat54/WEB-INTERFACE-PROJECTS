import React from "react";
import "./StudentPortal.css";

// Student Profile
function StudentProfile({ student }) {
  return (
    <div className="profile">
      <div className="profile-icon">👨‍🎓</div>

      <div>
        <h2>{student.name}</h2>
        <p>{student.department}</p>
        <p>Register No: {student.regNo}</p>
        <p>{student.year}</p>
      </div>
    </div>
  );
}

// Academic Card
function AcademicCard({ title, value, icon }) {
  return (
    <div className="academic-card">
      <div className="card-icon">{icon}</div>

      <div>
        <h3>{title}</h3>
        <h2>{value}</h2>
      </div>
    </div>
  );
}

// Subject List
function SubjectList({ subjects }) {
  return (
    <section>
      <h2 className="section-title">Enrolled Subjects</h2>

      <div className="subject-grid">
        {subjects.map((subject, index) => (
          <div className="subject-card" key={index}>
            <span>{index + 1}</span>

            <h3>{subject.name}</h3>

            <p>Credits: {subject.credits}</p>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${subject.progress}%` }}
              ></div>
            </div>

            <small>{subject.progress}% Completed</small>
          </div>
        ))}
      </div>
    </section>
  );
}

// Placement Status
function PlacementStatus({ cgpa, attendance }) {
  const eligible = cgpa >= 7.5 && attendance >= 75;

  return (
    <div className="placement-section">
      <h2>Placement Eligibility</h2>

      <div
        className={
          eligible ? "status eligible" : "status not-eligible"
        }
      >
        <div className="status-icon">
          {eligible ? "✓" : "!"}
        </div>

        <div>
          <h2>
            {eligible
              ? "Eligible for Placement"
              : "Not Eligible for Placement"}
          </h2>

          <p>
            {eligible
              ? "Congratulations! You meet the required CGPA and attendance criteria."
              : "Please improve your CGPA or attendance to meet the placement requirements."}
          </p>
        </div>
      </div>
    </div>
  );
}

// Header
function Header() {
  return (
    <header>
      <div className="logo">Student Portal</div>

      <nav>
        <a href="#dashboard">Dashboard</a>
        <a href="#subjects">Subjects</a>
        <a href="#placement">Placement</a>
      </nav>
    </header>
  );
}

// Footer
function Footer() {
  return (
    <footer>
      <h3>Student Academic Status Portal</h3>

      <p>
        Manage your academic information and placement status.
      </p>

      <p>© 2026 Student Portal | All Rights Reserved</p>
    </footer>
  );
}

// App
function StudentPortal() {
  const student = {
    name: "SRIKANTH V",
    regNo: "411625149048",
    department: "CSE (Cyber Security)",
    year: "2nd Year",
    cgpa: 8.2,
    attendance: 82,
  };

  const subjects = [
    {
      name: "Database Management System",
      credits: 4,
      progress: 85,
    },
    {
      name: "Web Technology",
      credits: 4,
      progress: 90,
    },
    {
      name: "Java Programming",
      credits: 3,
      progress: 75,
    },
    {
      name: "Data Structures",
      credits: 4,
      progress: 80,
    },
    {
      name: "Computer Networks",
      credits: 3,
      progress: 70,
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="hero" id="dashboard">
        <div>
          <p>Welcome Back 👋</p>

          <h1>
            Student Academic
            <br />
            Status Portal
          </h1>

          <p>
            Track your academic performance,
            <br />
            subjects, attendance and placement eligibility.
          </p>
        </div>

        <div className="hero-icon">🎓</div>
      </section>

      <main>
        {/* Student Profile */}
        <StudentProfile student={student} />

        {/* Academic Overview */}
        <h2 className="section-title">Academic Overview</h2>

        <div className="academic-grid">
          <AcademicCard
            title="CGPA"
            value={student.cgpa}
            icon="📊"
          />

          <AcademicCard
            title="Attendance"
            value={`${student.attendance}%`}
            icon="📅"
          />

          <AcademicCard
            title="Year"
            value={student.year}
            icon="🎓"
          />

          <AcademicCard
            title="Subjects"
            value={subjects.length}
            icon="📚"
          />
        </div>

        {/* Subjects */}
        <div id="subjects">
          <SubjectList subjects={subjects} />
        </div>

        {/* Placement */}
        <div id="placement">
          <PlacementStatus
            cgpa={student.cgpa}
            attendance={student.attendance}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default StudentPortal;