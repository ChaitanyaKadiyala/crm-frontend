import React from "react";
import { Jumbotron, Form, Button, Row, Col } from "react-bootstrap";
import "./add-ticket-form.style.css";

export const AddTicketForm = ({ handleOnSubmit, handleOnchange, frmData }) => {
  console.log(frmData);
  return (
    <Jumbotron className="add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmData.subject}
              minLength="3"
              onChange={handleOnchange}
              placeholder="Enter Subject"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmData.issueDate}
              onChange={handleOnchange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            as="textarea"
            name="details"
            rows="5"
            value={frmData.details}
            onChange={handleOnchange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="info" block>
          Login
        </Button>
      </Form>
    </Jumbotron>
  );
};
