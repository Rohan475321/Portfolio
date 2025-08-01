import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rohan Yadav </span>
            from <span className="purple"> Karad, India.</span>
            <br />
            I am currently a Aspirant Data Analyst.
            <br />
            I have completed B.Tech in CSE with Specialization in Artificial Intelligence (AI).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Bike Riding
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't stop until you reach the destination!"{" "}
          </p>
          <footer className="blockquote-footer">Rohan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
