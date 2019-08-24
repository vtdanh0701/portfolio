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
          <div className='home-container'>
            <div className='title-box'>
              <h1 className='animated fadeInLeft'>D A N H</h1>
              <h2 className='animated bounceInDown slow'>Full Stack Web Developer</h2>
            </div>
            <div className='social-box animated fadeIn slow delay-1s'>
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
        <h1>Who I am</h1>
          <div className='about-container' data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center" data-aos-once='true'>
            <div className='profile-container'>
              <img src={profile}/>
            </div>
            <div className='info-container'>
              <div className='info'>
                
                <h3>Hi there! My name is Danh Vuong and I am a full-stack web developer living in Seattle, WA. I have a broad experience with various development technologies, and I am currently specializing in JavaScript and React.</h3>
                
                <p>Coding and solving complex algorithm problems has been my passion since the day I started my Software Engineering Immersive program at General Assembly, Seattle. I love building web experiences that are effortless for users, and enjoy solving design problems through code.</p>
                <p>Aside from coding, I am also a pianist and a conductor for my church choir. Having chance to work with various teams and people refined my empathy, strategy and problems solving. I translate those valuable skills to my work environment, which allows me to offer unique and creative approaches to any project or challenge. </p>
                <p>Curious to learn more about me ? <Link to='contact' smooth={true}><a>Feel free to reach out!</a></Link></p>
              </div>
              <div className='skills'>
              {skills}
            </div>
            </div>
            
            
          
            
          </div>
        </div>
        <div className='project'>
          <h1 data-aos='fade-up' data-aos-duration='800' data-aos-easing='ease-in-out' data-aos-once='true'>My Project</h1>
          
          <div className='project-card' data-aos='fade-left' data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once='true' >
            <div className='project-img'>
              <img src={project2}/>
            </div>
            <div className='project-info'>
            <h3>iCePi</h3>
              <p className='tech'>React <span>|</span> MongoDB <span>|</span> JavaScript <span>|</span> CSS3</p>
              <p className='description'>iCePi provides users hundreds of recipes based on their recipe name or ingredients. You can create an account and save your favorite recipes for later. Step-by-step guides, with pictures, price per serving , time to complete...etc..We want to make sure you know exactly what you're doing and have a good meal ready.</p>
              <a href="https://icepi.herokuapp.com/" target='blank'> Live Demo</a>
              <a href='https://github.com/vtdanh0701/Project3-iCepi' target='blank'>GitHub</a>
              <p></p>
            </div>
          </div>
          <div className='project-card' data-aos='fade-right' data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center" data-aos-once='true' >
            <div className='project-img' >
              <img src={project1}/>
            </div>
            <div className='project-info'>
              <h3>Space Invader</h3>
              <p className='tech'>JavaScript <span>|</span> HTML5 <span>|</span> Canvas <span>|</span> CSS3</p>
              <p className='description'>Eliminate all the enemy units, upgrade your weapon and be ready for the boss !</p>
              <a href='https://vtdanh0701.github.io/space_invader/' target='blank'> Live Demo</a>
              <a href='https://github.com/vtdanh0701/space_invader' target='blank'>GitHub</a>
              <p></p>
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
        <div className='social-box-footer'>
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
        <p className='trademark'> {'\u00A9'} 2019 Danh Vuong</p>
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
