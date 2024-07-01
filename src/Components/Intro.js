import logo from './Images/Profile.jpg';

function Intro() {
    return (
        <div id="intro" className="intro">
            <img src={logo} alt="Your Name" className="profile-photo" />
            <h1>Greetings, I'm Nikhil Kumar Chaudhary</h1>
            <h2>A Computer Science passionate</h2>
            <p>
                I'm a developer with experience in diverse domains like web development both front-end and back-end, machine learning and UI designing.
                I have made quite a few projects using HTML, CSS, JavaScript, React, and Node.js, and I love creating intuitive and
                responsive user interfaces. I have also learned Spring Boot for API development during my internship, along with postgreSQl and verification
                of various urls using POSTMAN.

            </p>
            <p>
                I am willing to learn about new technologies without any restrictions while constantly trying to keep up skilling myself
                and want to work on great innovative technologies and software projects.
            </p>
            {/* <p>
                Some of my key achievements include:
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </p> */}
        </div>
    );
}

export default Intro;
