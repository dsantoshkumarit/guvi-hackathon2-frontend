import React from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";

import { Row, Col, Navbar, Nav, ButtonToolbar, Button } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import Home from "./Home";
import Movies from "./Movies";
import Userbookingslist from "./Userbookingslist";
import Movietheaters from "./Movietheaters";

const Navigation = () => (
  <>
    <style type="text/css">
      {`
    .btn-flat {
      border:none;
      color: black;
    }

    .btn-flat:hover{
      background:white;
    }
    `}
    </style>
    <MemoryRouter>
      <Navbar bg="light" variant="light">
        <Nav align={"center"} className="ml-auto mr-auto">
          <Nav.Link>
            <LinkContainer to="/">
              <Button variant="flat">Home</Button>
            </LinkContainer>
          </Nav.Link>
          <Nav.Link>
            <LinkContainer to="/theaters">
              <Button variant="flat">Movie Theaters</Button>
            </LinkContainer>
          </Nav.Link>
          <Nav.Link>
            <LinkContainer to="/movies">
              <Button variant="flat">Movies</Button>
            </LinkContainer>
          </Nav.Link>
          <Nav.Link>
            <LinkContainer to="/bookings">
              <Button variant="flat">User Bookings List</Button>
            </LinkContainer>
          </Nav.Link>
        </Nav>
      </Navbar>

      <Switch>
        <Route path="/theaters">
          <Movietheaters />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/bookings">
          <Userbookingslist />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </MemoryRouter>
  </>
);

export default Navigation;
