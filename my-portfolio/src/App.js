import React from 'react';
import './App.css';
import Section from './Section';

function App() {
  return (
    <div className="App">
      <header className="header">
      
        <div class="container">
          <h1>Aman</h1>
          <p>Toronto, ON M1G 3H2 | <a href="mailto:amanchandharo9@gmail.com">amanchandhar09@gmail.com</a> | <a href="https://www.linkedin.com/in/aman-a-7a582825b">LinkedIn Profile</a></p>
        </div>
  
      </header>

      <main className="main-content">
        <Section title="Professional Summary" className="professional-summary">
          <p>With a Bachelor of Computer Application (BCA) degree, I have a solid foundation in computer science and software development. During the COVID-19 pandemic, I volunteered in data gathering and management to assist the government in tracking and recording data about COVID-19 patients. This experience honed my skills in data management and reinforced my problem-solving abilities. I am now keen on expanding my knowledge in IT's growing trends, exploring new technologies, and continuously learning to stay updated in this ever-evolving field.</p>
        </Section>

        <Section title="Work Experience" className="work-experience">
          <div className="work-item">
            <h3>District Administration (Volunteer) | Hoshiarpur, IN</h3>
            <p><strong>Assistant Data Collection and Management</strong> | February 2021 – July 2021</p>
            <ul>
              <li>Enhanced the capabilities of district administration in supporting the country during the COVID-19 crisis.</li>
              <li>Conducted phone interviews with COVID-19 patients.</li>
              <li>Provided the district administration with daily reports.</li>
              <li>Thoroughly examined and extracted data collected daily.</li>
            </ul>
          </div>
        </Section>

    <section class="section education">
      <h2>Education</h2>
      <div class="education-item">
        <h3>Ontario College</h3>
        <p>Graduate Certificate in Computer Software and Database Management | January 2024 – Present</p>
      </div>
      <div class="education-item">
        <h3>Punjab University</h3>
        <p>Bachelor of Computer Applications. GPA: 3.21 | August 2019 – July 2022</p>
      </div>
    </section>

    <section class="section certifications">
      <h2>Certifications</h2>
      <ul>
        <li>Build a Website with HTML, CSS, and GitHub Pages Skill Path</li>
        <li>Learn Python 3</li>
      </ul>
    </section>

    <section class="section interests">
      <h2>Interests</h2>
      <ul>
        <li>Storytelling as a strategic tool for conveying complex technical concepts.</li>
        <li>Transforming creative visions into immersive 3D experiences using cutting-edge AI technologies.</li>
      </ul>
    </section>
      </main>

      <footer className="footer">
      <div class="container">
        <p>&copy; 2025 Aman . All Rights Reserved.</p>
      </div>
      </footer>
    </div>
  );
}

export default App;
