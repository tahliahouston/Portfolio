import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>Software Developmer</b> at
        Oogi Labs, working in the Software Development team. 
        At the same time, I am undertaking a
        part-time <b> Bachelor of Honours Computing </b>at
        <a href="https://www.unisa.ac.za/"> University of South Africa</a>.
      </p>
    );
    const two = (
      <p>
        When I'm not coding, I enjoy playing video games, reading books, and
        learning about Math and Science topics. I also stream on Twitch and
        make Tiktoks.
      </p>
    );

    const tech_stack = [
      "Dart",
      "Python",
      "React.js",
      "Java",
      "Javascript",
      "C#"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
          <h1 className="about-heading">/ about me</h1>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;