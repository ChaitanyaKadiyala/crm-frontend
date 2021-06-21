import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ResetPassword = ({
  handleOnchange,
  email,
  handleOnResetSubmit,
  formSwitcher,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnchange}
                placeholder="Enter Email"
                required
              />
            </Form.Group>

            <Button type="submit">Reset Password</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher("login")}>
            Login Now
          </a>
        </Col>
      </Row>
    </Container>
  );
};

// LoginForm.propTypes = {
//   handleOnchange: PropTypes.func.isRequired,
//   handleOnSubmit: PropTypes.func.isRequired,
//   email: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
// };
