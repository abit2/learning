// pages/index.js
// import { gql } from "@apollo/client";
// import client from "../apollo-client";
import RestaurantList from "../components/RestaurantList";
import React, {useState} from "react";
import {
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Row
} from "reactstrap";
import ClientOnly from "../components/ClientOnly";



const Home = (props) => {
  console.log(props);

  const [query, setQuery] = useState("");
  const handleSearchQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <div className="search">
            <InputGroup>
              <InputGroupAddon addonType="append"> Search </InputGroupAddon>
              <Input onChange={handleSearchQueryChange} />
            </InputGroup>
          </div>
          <ClientOnly>
            <RestaurantList search={query} />
          </ClientOnly>
        </Col>
      </Row>
      <style jsx>
        {`
          .search {
            margin: 20px;
            width: 500px;
          }
        `}
      </style>
    </div>
  );
}

export default Home;