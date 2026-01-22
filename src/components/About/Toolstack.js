import React from "react";
import { Col, Row } from "react-bootstrap";
// VscVscode and DiVisualstudio were in your lists
import { VscVscode } from "react-icons/vsc"; 
import { FaGithub, FaTable } from "react-icons/fa";
import { 
  SiPostman, 
  SiVercel, 
  SiMysql 
} from "react-icons/si";
import {
  DiPython,
  DiGit,
  DiMongodb,
  DiPostgresql,
  DiOnedrive, // Replacement for Excel/Office found in your list
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiOnedrive /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTable /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
    </Row>
  );
}

export default Toolstack;
