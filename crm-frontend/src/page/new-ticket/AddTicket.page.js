import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  details: "",
};
export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);
  useEffect(() => {}, [frmData]);

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Form submit request received");
  };
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm
            handleOnchange={handleOnchange}
            frmData={frmData}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};
