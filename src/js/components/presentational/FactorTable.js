import React from "react";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild } from '@fortawesome/free-solid-svg-icons';

export default function FactorTable(props) {
    return (
        <Table borderless className="factor-table">
            <thead>
                <tr>
                    <th></th>
                    <th className="factor-title" style={{color: props.titleColor}}>{props.title}</th>
                    <th className="factor-icon" style={{color: props.titleColor}}>
                        <FontAwesomeIcon icon={faChild} size="2x"/>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((item, index) => 
                        <tr key={index}>
                            <td className="factor-item-cell">{`${props.factorIndex}.${index + 1}`}</td>
                            <td className="factor-bar-cell">
                                <div className="factor-bar-wrapper">
                                    <div className="factor-bar" style={{width: `${item.score * 100}%`}}></div>
                                    <div className="average-bar" style={{width: `${item.average * 100}%`}}></div>
                                    <div className="high-bar" style={{width: `${item.high * 100}%`}}></div>
                                </div>
                                <div>{item.title}</div>
                            </td>
                            <td className="factor-score-cell">{item.score.toFixed(2)}</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}