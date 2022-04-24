import React, { useState } from "react";
import {
  Navbar,
  Container,
  // Form,
  // FormControl,
  Button,
  Nav,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/FlickrLogo.png";
import { searchText } from "../redux/actions/search";

const Navigation = () => {
  const [search, setSearch] = useState(null);
  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearch = () => {
    const data = search;
    dispatch(searchText(data));
    navigate("/search");
  };

  return (
    <>
      <Container fluid style={{ padding: "1rem 3rem 3rem" }}>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Link to="/">
              <Navbar.Brand>
                <img
                  src={logo}
                  width="50"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <div className="d-flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  name="search"
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
                <Button variant="outline-primary" onClick={handleSearch}>
                  Search
                </Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Navigation;
