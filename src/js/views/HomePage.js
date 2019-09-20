import React, { Component } from "react";
import { Container } from "reactstrap";


import WorldGraph from "../components/WorldGraph";

class HomePage extends Component {
    render() {
        return(
            <Container fluid>
                <WorldGraph />
            </Container>
        )
    }
}

export default HomePage;