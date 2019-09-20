import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import DetailsGraph from "../components/DetailsGraph";
import DetailsTable from "../components/DetailsTable";
import Header from "../components/presentational/Header";
import Navbar from "../components/presentational/Navbar";
import SummaryTable from "../components/SummaryTable";

import { getSummary, getDetails } from "../actions/profile.actions";

class ProfilePage extends Component {

    constructor(props) {
        super(props);
        
        const { countryId } = this.props.location.state;
        this.props.getSummary(countryId);
        this.props.getDetails(countryId);
    }

    render() {
        const { match } = this.props;
        return(
            <Container>
                <Navbar />
                <Header title={match.params.id} region="Sub-Saharan Africa" incomeGroup="Lower Middle" />
                <Row>
                    <Col sm={12} md={6}><SummaryTable/></Col>
                    <Col sm={12} md={6}><DetailsGraph /></Col>
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

export default withRouter(connect(null, mapDispatchToProps)(ProfilePage));