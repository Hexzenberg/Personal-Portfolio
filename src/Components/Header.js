import React from 'react';

function Header() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="header">
            <h1 className="font_change">
                Hi, I am <a href='https://github.com/Hexzenberg' target='_blank' rel="noopener noreferrer">Nikhil</a>.
            </h1>
            <div className="header_links">
                <h5
                    className="font_change_2 margin_60"
                    onClick={() => scrollToSection('skills')}
                >
                    Skills
                </h5>
                <h5
                    className="font_change_2 margin_1"
                    onClick={() => scrollToSection('projects')}
                >
                    Projects
                </h5>
                <h5
                    className="font_change_2 margin_1"
                    onClick={() => scrollToSection('footer')}
                >
                    Social
                </h5>
            </div>
        </div>
    );
}

export default Header;
