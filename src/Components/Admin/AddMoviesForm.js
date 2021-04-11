import React, { useState } from "react";
import axios from "axios";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";

const AddMoviesForm = (props) => {
  const api = axios.create({ baseURL: "http://localhost:3002" });
  const [posted, setPosted] = useState(false);
  const [validated, setValidated] = useState(false);
  const [moviename, setMovieName] = useState("");
  const [movierating, setMovieRating] = useState("");
  const [movielength, setMovieLength] = useState("");
  const [movieimgurl, setMovieImgUrl] = useState("");

  const handleAddMovieSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    let data = {
      moviename: moviename,
      movierating: movierating,
      movielength: movielength,
      movieimgurl: movieimgurl
    };
    api.post("/admin/movie/add", data).then((res) => {
      setPosted(true);
      if (posted) {
        alert("Movie added successfully");
      }
    });

    setValidated(true);
  };

  return (
    <Row>
      <Col>
        <Row>
          <Col align={"center"}>
            <br />
            <h3>Add Movies</h3>
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
            <Form
              noValidate
              validated={validated}
              onSubmit={handleAddMovieSubmit}
            >
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Movie Name</Form.Label>
                  <Form.Control
                    required
                    name="moviename"
                    type="text"
                    placeholder="Movie Name"
                    onChange={(e) => {
                      return setMovieName(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter new movie name
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Ratings (?/10)</Form.Label>
                  <Form.Control
                    required
                    name="movierating"
                    type="text"
                    placeholder="eg: 6.5"
                    onChange={(e) => {
                      return setMovieRating(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter movie rating
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Movie Length </Form.Label>
                  <Form.Control
                    name="movielength"
                    required
                    type="text"
                    placeholder="eg: 2h35m"
                    onChange={(e) => {
                      return setMovieLength(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter movie length
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Movie Image Url </Form.Label>
                  <Form.Control
                    required
                    name="movieimgurl"
                    type="text"
                    placeholder="eg: www.abc.com/smile.png"
                    onChange={(e) => {
                      return setMovieImgUrl(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter movie image url
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Button type="submit">ADD MOVIE</Button>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AddMoviesForm;
