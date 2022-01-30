import React from "react";
import { Spinner } from "react-bootstrap";

const LoaderComponent = ({ className, variant }) => {
    return <Spinner animation="border" className={className} variant={variant} />
}

export default LoaderComponent;