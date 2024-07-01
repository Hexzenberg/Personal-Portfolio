function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "C/C++",
        "JAVA",
        "Python",
        "Machine Learning Libraries",
        "ReactJS",
        "Spring Boot",
        "AngularJS",
        "NodeJS",
        "POSTMAN"
    ];

    return (
        <div id="skills" className="skills">
            <h2 style={{ fontStyle: "italic" }}>Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
