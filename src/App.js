import React from 'react';
import './App.css';
import Pdf from './static/Danh_Vuong_resume.pdf';
import profile from './static/profile1.jpg';
import reactLogo from './static/react-logo.png';
import reactRouter from './static/react-router.svg';
import nodeLogo from './static/nodejs-icon.svg';
import expressLogo from './static/express-logo.png';
import postgresLogo from './static/postgresql-inc.svg';
import sequelizeLogo from './static/sequelize.svg';
import mongoDbLogo from './static/mongodb-original.svg';
import pythonLogo from './static/python.svg';
import djangoLogo from './static/django.svg';
import htmlLogo from './static/04H9yU7gSxVBEPrwuDEy4G1if.png';
import cssLogo from './static/css3.svg';
import gitLogo from './static/git-icon.svg';
import gitHubLogo from './static/github-icon-1.svg';
import jsLogo from './static/javascript-1.svg';
import vsLogo from './static/visual-studio-code.svg';
import psLogo from './static/photoshop-cc.svg';
import premiereLogo from './static/premiere-cc.svg';

function App() {
  return (
    <div className="App">
      <main className='main'>
        <div className='home'>
          <div className='title-box'>
            <h1>D A N H</h1>
            <h2>FULL STACK WEB DEVELOPER</h2>
          </div>
          <div className='social-box'>
            <a href='https://www.linkedin.com/in/danh-vuong/' target='_blank'>
              <i class="fab fa-linkedin-in"></i> 
              <span>LinkedIn</span>
            </a>
            <a href='http://github.com/vtdanh0701' target='_blank'>
              <i class="fab fa-github-alt"></i>
              <span>Github</span>
            </a>
            <a href='mailto:vtdanh0701@gmail.com'>
              <i class="fas fa-envelope"></i>
              <span>Email</span>
            </a>
            <a href='https://www.youtube.com/c/DanhVuong71' target='_blank'>
              <i class="fab fa-youtube"></i>
              <span>Youtube</span>
            </a>
            <a href={Pdf} target='_blank'>
              <i class="fas fa-file-alt"></i>
              <span>Resume</span>
            </a>
          </div>
        </div>
        <div className='about'>
          <div className='info'>
            <h1>About Me</h1>
            <p>I'm a Seattle-based full-stack Web Developer who has broad experience with various   development technologies, and I am currently specializing in JavaScript and React. </p>
            <p>I enjoy learning new things and finding creative solutions for out of the ordinary   problems. Passionate and inspired by visual aesthetics, good design, and clean, precise   code. Driven to create interactive products shaped around human experience, expression,   and intuitive, efficient functionality.</p>
            <p>Being a self-taugh pianist and a conductor for my community church choir taught me   teamwork, communication and discipline. Working with various team refined my empathy,   strategy and problem-solving. Learning programming on my own, I learned patience,   perseverance and persistence. I translate those valuable skills to my work environment,   which allows me to offer unique and creative approaches to any project or challenge.</p>
            <p>Curious to learn more about me ? Feel free to reach out!</p>
          </div>
          <div className='profile-container'>
            <img src={profile}/>
          </div>

          <div className='skills'>
              <img src={reactLogo}/>
              <img src={reactRouter}/>
              <img src={nodeLogo}/>
              <img src={expressLogo}/>
              <img src={postgresLogo}/>
              <img src={sequelizeLogo}/>
              <img src={mongoDbLogo}/>
              <img src={pythonLogo}/>
              <img src={djangoLogo}/>
              <img src={jsLogo}/>
              <img src={htmlLogo}/>
              <img src={cssLogo}/>
              <img src={gitLogo}/>
              <img src={gitHubLogo}/>
              <img src={vsLogo}/>
              <img src={psLogo}/>
              <img src={premiereLogo}/>

          </div>
        
        </div>
        <div className='project'>
          <h1>My Project</h1>
        </div>
        <div className='contact'>
          <h1>Contact</h1>
          <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name" placeholder='Name'/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" placeholder='Email'/></label>
          </p>
          <p>
            <label>Message: <textarea name="message" placeholder='Message'></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        </div>
      </main>
    </div>
  );
}

export default App;
