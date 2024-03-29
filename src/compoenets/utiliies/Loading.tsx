import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
    return (
        <>
            <Spinner animation="border" role="status" style={{ margin: "45%" }}>
                <span className="sr-only">Loading...</span>
            </Spinner>
        </>
    );
};

export default Loading;
