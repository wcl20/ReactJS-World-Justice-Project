import React from "react";

export default function Header(props) {
    return(
        <div className="header">
            <h1 className="title">{props.title}</h1>
            <div className="meta-data">
                <div><span>Region:</span>{props.region}</div>
                <div><span>Income Group:</span>{props.incomeGroup}</div>
            </div>
        </div>
    )
}