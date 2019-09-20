import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import FactorTable from "../components/presentational/FactorTable";
import Spinner from "../components/presentational/Spinner";

function DetailsTable(props) {
    const { isLoading, data } = props;
    return(
        <Fragment>
            {   
                isLoading ? 
                <Row><Col><Spinner /></Col></Row> :
                data.map((_, index, array) => {
                    if(index % 3 !== 0) return <div key={index}></div>;
                    let factor1 = array[index], factor2 = array[index + 1], factor3 = array[index + 2];
                    return (
                        <Row key={index}>
                            <Col sm={12} md={4}>
                                {
                                    factor1 &&
                                    <FactorTable 
                                        title={factor1.factorTitle}
                                        titleColor={factor1.metaData.color}
                                        factorIndex={index + 1}
                                        data={factor1.items}
                                    />  
                                }
                            </Col>
                            <Col sm={12} md={4}>
                                {
                                    factor2 &&
                                    <FactorTable 
                                        title={factor2.factorTitle}
                                        titleColor={factor2.metaData.color}
                                        factorIndex={index + 2}
                                        data={factor2.items}
                                    />  
                                }
                            </Col>
                            <Col sm={12} md={4}>
                                {
                                    factor3 &&
                                    <FactorTable 
                                        title={factor3.factorTitle}
                                        titleColor={factor3.metaData.color}
                                        factorIndex={index + 3}
                                        data={factor3.items}
                                    />  
                                }
                            </Col>
                        </Row>
                    );
                })
            }
        </Fragment>
    )
}

function mapStateToProps(state) {
    return {
        isLoading: state.profileDetails.isLoading,
        error: state.profileDetails.error,
        data: state.profileDetails.data
    }
}

export default connect(mapStateToProps)(DetailsTable);