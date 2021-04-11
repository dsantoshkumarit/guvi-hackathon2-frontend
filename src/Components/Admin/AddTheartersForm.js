import React, { useState } from "react";
import axios from "axios";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";

const AddTheartersForm = (props) => {
  const api = axios.create({ baseURL: "http://localhost:3002" });
  const [posted, setPosted] = useState(false);
  const [validated, setValidated] = useState(false);
  const [operation, setOperation] = useState("add");
  const [theatername, setTheatername] = useState("");
  const [shows, setShows] = useState(["", false, false, false, false, false]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    let data = { theatername: theatername, shows: shows };
    api.post("/admin/theater/" + operation, data).then((res) => {
      setPosted(true);
      if (posted) {
        alert(
          (operation === "add"
            ? "Added"
            : operation === "modify"
            ? "Modified"
            : "Deleted") + " Successfully"
        );
      }
      // setTimeout(() => {}, 2000);
      // console.log("added successfully", res);
    });

    setValidated(true);
  };

  return (
    <Row>
      <Col>
        <Row>
          <Col align={"center"}>
            <br />
            <h3>Add/Modify/Delete Theater</h3>
            {/* <Alert show={posted} variant="success">
              {operation === "add"
                ? "Added"
                : operation === "modify"
                ? "Modified"
                : "Deleted"}{" "}
              Successfully!
            </Alert> */}
            <hr
              style={{
                color: "red",
                backgroundColor: "red",
                height: 0.5,
                borderColor: "red"
              }}
            />
          </Col>
        </Row>
        <Row align={"center"}>
          <Col>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.SelectCustom">
                  <Form.Label>Operation</Form.Label>
                  <Form.Control
                    as="select"
                    custom
                    onChange={(e) => {
                      console.log(e.target.value, operation);
                      return setOperation(e.target.value);
                    }}
                  >
                    <option value="add">Add Theater</option>
                    <option value="modify">Modify Theater</option>
                    <option value="delete">Delete Theater</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Theater{theatername}</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Theater Name"
                    onChange={(e) => {
                      return setTheatername(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter new theater name
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  md="12"
                  as={Col}
                  controlId="exampleForm.ControlSelect2"
                >
                  <Form.Label>Select show timings for theater</Form.Label>

                  <div key={`inline-checkbox`} className="mb-3">
                    <Form.Check
                      required
                      inline
                      label="09:00 AM"
                      value="09:00 AM"
                      type="checkbox"
                      id={`inline-checkbox-1`}
                      onChange={(e) => {
                        let show = [...shows];
                        show[1] = !shows[1];
                        console.log(shows);
                        return setShows(show);
                      }}
                    />
                    <Form.Check
                      inline
                      label="12:30 PM"
                      value="12:30 PM"
                      type="checkbox"
                      id={`inline-checkbox-2`}
                      onChange={(e) => {
                        let show = [...shows];
                        show[2] = !shows[2];

                        return setShows(show);
                      }}
                    />
                    <Form.Check
                      inline
                      label="03:00 PM"
                      value="03:00 PM"
                      type="checkbox"
                      id={`inline-checkbox-3`}
                      onChange={(e) => {
                        let show = [...shows];
                        show[3] = !shows[3];

                        return setShows(show);
                      }}
                    />
                    <Form.Check
                      required
                      inline
                      label="06:00 PM"
                      value="06:00 PM"
                      type="checkbox"
                      id={`inline-checkbox-4`}
                      onChange={(e) => {
                        let show = [...shows];
                        show[4] = !shows[4];

                        return setShows(show);
                      }}
                    />
                    <Form.Check
                      inline
                      label="09:00 PM"
                      value="09:00 PM"
                      type="checkbox"
                      id={`inline-checkbox-5`}
                      onChange={(e) => {
                        let show = [...shows];
                        show[5] = !shows[5];

                        return setShows(show);
                      }}
                    />
                  </div>
                </Form.Group>
              </Form.Row>
              <Button type="submit">{operation.toUpperCase()} THEATER</Button>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AddTheartersForm;
