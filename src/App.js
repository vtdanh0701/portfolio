import React from 'react';
import './App.css';
import './Nav.css';
import './Animate.css'
import logos from './static/logos';
import AOS from 'aos';
import Pdf from './static/Danh_Vuong_resume.pdf';
import profile from './static/profile1.jpg';
import project1 from './static/project1.png';
import project2 from './static/project2.png';
import {Link} from 'react-scroll';
AOS.init();
function App() {
  let skills=[];
  let tech=[
    'React',
    'React Router',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Sequelize',
    'MongoDB',
    'Python',
    'Django',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Git',
    'Github',
    'VS Code',
    'Photoshop',
    'Premiere'
  ]
  let i = 0;
  for( let logo in logos){
    skills.push(
      <div key={i} className='skills-node'>
        <img src={logos[logo]} alt={logo}/>
        <p>{tech[i]}</p>
      </div>
    );
    i++;
  }
  return (
    <div className="App">
      <main className='main'>
        <div className='home'>
          <div className='home-container animated fadeInUp slow'>
            <div className='title-box'>
              <h1>D A N H</h1>
              <h2>Full Stack Web Developer</h2>
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
        </div>
        <div className='about'>
          <div className='about-container' data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center">
          <h1>About Me</h1>
            <div className='info'>
              
              <p>I'm a Seattle-based full-stack Web Developer who has broad experience with various   development technologies, and I am currently specializing in JavaScript and React. </p>
              <p>I enjoy learning new things and finding creative solutions for out of the ordinary   problems. Passionate and inspired by visual aesthetics, good design, and clean, precise   code. Driven to create interactive products shaped around human experience, expression,   and intuitive, efficient functionality.</p>
              <p>Being a self-taught pianist and a conductor for my community church choir taught me   teamwork, communication and discipline. Working with various team refined my empathy,   strategy and problem-solving. Learning programming on my own, I learned patience,   perseverance and persistence. I translate those valuable skills to my work environment,   which allows me to offer unique and creative approaches to any project or challenge.</p>
              <p>Curious to learn more about me ? Feel free to reach out!</p>
            </div>
            <div className='profile-container'>
              <img src={profile}/>
            </div>
          
            <div className='skills'>
              {skills}
            </div>
          </div>
        </div>
        <div className='project'>
          <h1>My Project</h1>
          <div className='project-card'>
            <div className='project-img'>
              <img src={project1}/>
            </div>
            <div className='project-info'>
              Hello from info
            </div>
          </div>
          <div className='project-card'>
            <div className='project-img'>
              <img src={project2}/>
            </div>
            <div className='project-info'>
              Hello from info
            </div>
          </div>
        </div>
        <div className='contact-container'>
          
          <form name="contact" method="post">
          <h1>Contact</h1> <br/>
            <input type="hidden" name="form-name" value="contact" />
            <div className='email-name-container'>
                <input className='contact-name' type="text" name="name" placeholder='Name'/>
                <input className='contact-email' type="email" name="email" placeholder='Email'/>
            </div>
            <textarea className='contact-message' name="message" placeholder='Message'></textarea>
            <button className='btn' type="submit">Send Message</button>     
        </form>
        <div className='find-me'>
          Find Me Online
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
            
          </div>
        <p> {'\u00A9'} 2019 Danh Vuong</p>
        </div>
        
      </main>
      <div className='Nav animated bounceInLeft slow'>
        <Link
          to='home'
          activeClass='active'
          spy={true}
          smooth={true}
          duration={600}>
          <div className='node'>
            <span>Home</span>
          </div>
        </Link>

        <Link
          to='about'
          activeClass='active'
          spy={true}
          smooth={true}
          duration={600}>
          <div className='node'>
            <span>About</span>
          </div>
        </Link>

        <Link
          to='project'
          activeClass='active'
          spy={true}
          smooth={true}
          duration={600}>
          <div className='node'>
            <span>Projects</span>
          </div>
        </Link>
        <Link
          to='contact-container'
          activeClass='active'
          spy={true}
          smooth={true}
          duration={600}>
          <div className='node'>
            <span>Contact</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default App;
