import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild } from '@fortawesome/free-solid-svg-icons';

import FactorTable from "./js/components/presentational/FactorTable";
import Header from "./js/components/presentational/Header";
import RadialGraph from "./js/components/RadialGraph";
import SummaryTable from "./js/components/presentational/SummaryTable";


import "./scss/main.scss";

const data = [
    { title: "Limits by legislature", score: 0.69, average: 0.59, high: 0.72 },
    { title: "Limits by judiciary", score: 0.71, average: 0.58, high: 0.71 },
    { title: "Independent auditing", score: 0.59, average: 0.56, high: 0.71 },
    { title: "Sanctions for official misconduct", score: 0.73, average: 0.59, high: 0.66 },
    { title: "Non-governmental checks", score: 0.57, average: 0.54, high: 0.73 },
    { title: "Lawful transition of power", score: 0.59, average: 0.61, high: 0.83 },
]

const summary = {
    overview: {
        score: 0.64,
        regionalRank: "21/30",
        incomeRank: "19/30",
        globalRank: "106/126"
    },
    change: {
        score: 0,
        rank: "same"      
    },
    details: [
        {
            title: "Constraints on Government Powers",
            titleColor: "#327644",
            icon: <FontAwesomeIcon icon={faChild}/>,
            trend: "same",
            score: 0.54,
            regionalRank: "11/30",
            incomeRank: "8/30",
            globalRank: "64/126"
        },
        {
            title: "Absence of Corruption",
            titleColor: "#709608",
            icon: <FontAwesomeIcon icon={faChild}/>,
            trend: "same",
            score: 0.34,
            regionalRank: "20/30",
            incomeRank: "20/30",
            globalRank: "105/126"
        },
        {
            title: "Open Government",
            titleColor: "#00997F",
            icon: <FontAwesomeIcon icon={faChild}/>,
            trend: "down",
            score: 0.46,
            regionalRank: "19/30",
            incomeRank: "15/30",
            globalRank: "99/126"
        },
        {
            title: "Fundamental Rights",
            titleColor: "#2D72B7",
            icon: <FontAwesomeIcon icon={faChild}/>,
            trend: "up",
            score: 0.43,
            regionalRank: "14/30",
            incomeRank: "18/30",
            globalRank: "91/126"
        },
        {
            title: "Order and Security",
            titleColor: "#3A2E72",
            icon: <FontAwesomeIcon icon={faChild}/>,
            trend: "same",
            score: 0.35,
            regionalRank: "30/30",
            incomeRank: "30/30",
            globalRank: "125/126"
        },
        {
            title: "Regulatory Enforcement",
            titleColor: "#90278F",
            icon: <FontAwesomeIcon icon={faChild}/>,
            trend: "same",
            score: 0.43,
            regionalRank: "18/30",
            incomeRank: "18/30",
            globalRank: "100/126"
        },
        {
            title: "Civil Justice",
            titleColor: "#7F2220",
            icon: <FontAwesomeIcon icon={faChild}/>,
            trend: "same",
            score: 0.48,
            regionalRank: "10/30",
            incomeRank: "11/30",
            globalRank: "72/126"
        },
        {
            title: "Criminal Justice",
            titleColor: "#E57839",
            icon: <FontAwesomeIcon icon={faChild}/>,
            trend: "down",
            score: 0.43,
            regionalRank: "12/30",
            incomeRank: "8/30",
            globalRank: "72/126"
        },
    ]
}


function App() {
  return (
    <Container>
        <Row>
            <Col><Header title="Nigeria" region="Sub-Saharan Africa" incomeGroup="Lower Middle" /></Col>
        </Row>
        <Row>
            <Col><SummaryTable data={summary}/></Col>
            <Col><RadialGraph /></Col>
        </Row>
        <Row>
            <Col>
                <FactorTable 
                    title="Constraints on Government Powers"
                    titleColor="#327644"
                    icon={<FontAwesomeIcon icon={faChild} size="2x"/>}
                    data={data}
                />
            </Col>
            <Col>
                <FactorTable 
                    title="Constraints on Government Powers"
                    titleColor="#327644"
                    icon={<FontAwesomeIcon icon={faChild} size="2x"/>}
                    data={data}
                />
            </Col>
            <Col>
                <FactorTable 
                    title="Constraints on Government Powers"
                    titleColor="#327644"
                    icon={<FontAwesomeIcon icon={faChild} size="2x"/>}
                    data={data}
                />
            </Col>
        </Row>
    </Container>
  );
}

export default App;
