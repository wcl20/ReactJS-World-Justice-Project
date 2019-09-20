import React from "react";
import { Spinner as BootstrapSpinner} from "reactstrap";

export default function Spinner(props) {
    return (
        <div className="spinner-wrapper">
            <BootstrapSpinner 
                className="spinner"
                color="secondary" 
            />
        </div>
    )
}