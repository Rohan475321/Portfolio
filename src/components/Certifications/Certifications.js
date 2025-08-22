import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function Certifications() {
  const certifications = [
    {
      title: "IBM Data Fundamentals Certificate",
      issuer: "IBM",
      date: "2025",
      description: "Completed comprehensive data analytics training covering data cleaning, analysis, visualization, and Python programming",
      link: "https://www.credly.com/badges/30d76870-0aaf-4565-99a5-e12ddb5c81d9/linked_in_profile", // Add your certificate link here
      credentialId: "30d76870-0aaf-4565-99a5-e12ddb5c81d9" // Add your credential ID if available
    },
    {
      title: "CISCO Python Certificate",
      issuer: "CISCO ",
      date: "2024",
      description: "Demonstrated foundational knowledge of Python programming language",
      link: "https://www.credly.com/badges/cef8d52a-2241-455d-bbca-39fea675f61b/linked_in_profile", // Add your certificate link here
      credentialId: "cef8d52a-2241-455d-bbca-39fea675f61b" // Add your credential ID if available
    },
    {
      title: "HP Data Science & Analytics",
      issuer: "HP",
      date: "2024",
      description: "Mastered Python programming for data analysis, visualization, and machine learning applications",
      link: "https://www.life-global.org/certificate/9b9bfef8-abdf-430c-ae77-91e0476ffe3d", // Add your certificate link here
      credentialId: "9b9bfef8-abdf-430c-ae77-91e0476ffe3d" // Add your credential ID if available
    },
    {
      title: "Deloitte Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "2025",
      description: "Advanced the Analytics and gained the hands on experience with the terms in the Data Analytics",
      link: "https://www.linkedin.com/posts/rohan-yadav1_data-analytics-job-simulation-certificate-activity-7363288556334657536-y2FH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJlUKcBRhwcN4Nj4fhWhPplNFDyBjNr8b8", // Add your certificate link here
      credentialId: "RCSo45R23KR3WzqGE" // Add your credential ID if available
    },
    {
        title: "Tata Data Visualisation:Empowering Business Effective Insights",
        issuer: "TATA",
        date: "2025",
        description: "Advanced data analysis & visualization ",
        link: "https://www.linkedin.com/posts/rohan-yadav1_forage-certificate-activity-7364703199066284033-pRHh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJlUKcBRhwcN4Nj4fhWhPplNFDyBjNr8b8", // Add your certificate link here
        credentialId: "	3L6FuRGCJnhKRhcvF" 
    }
  ];

  return (
    <Container fluid className="certification-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "3rem" }}>
          Professional certifications that validate my skills and expertise
        </p>
        
        <Row style={{ justifyContent: "center" }}>
          {certifications.map((cert, index) => (
            <Col md={6} lg={4} className="certification-card" key={index}>
              <Card className="certification-card-view">
                <Card.Body>
                  <Card.Title className="purple" style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
                    {cert.title}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {cert.issuer} • {cert.date}
                  </Card.Subtitle>
                  <Card.Text style={{ textAlign: "justify", marginBottom: "1.5rem" }}>
                    {cert.description}
                  </Card.Text>
                  {cert.credentialId && (
                    <Card.Text style={{ fontSize: "0.9rem", color: "#888" }}>
                      Credential ID: {cert.credentialId}
                    </Card.Text>
                  )}
                  <Button
                    variant="primary"
                    href={cert.link}
                    target="_blank"
                    style={{ marginTop: "1rem" }}
                  >
                    <AiOutlineDownload />
                    &nbsp;View Certificate
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
