import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import DetailsTable from "../components/DetailsTable";
import Header from "../components/presentational/Header";
import RadialGraph from "../components/RadialGraph";
import SummaryTable from "../components/SummaryTable";

import { getSummary, getDetails } from "../actions/profile.actions";

class ProfilePage extends Component {

    constructor(props) {
        super(props);

        this.props.getSummary();
        this.props.getDetails();
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <Header 
                            title="Nigeria" 
                            region="Sub-Saharan Africa" 
                            incomeGroup="Lower Middle" 
                        />
                    </Col>
                </Row>
                <Row>
                    <Col><SummaryTable/></Col>
                    <Col><RadialGraph /></Col>
                </Row>
                <DetailsTable />
            </Container>
        )
    }
}

const mapDispatchToProps = {
    getSummary,
    getDetails
}

export default connect(null, mapDispatchToProps)(ProfilePage);