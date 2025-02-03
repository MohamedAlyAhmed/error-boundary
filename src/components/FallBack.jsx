import React from "react";
import { useNavigate } from "react-router-dom";

const FallBack = ({ errorInfo }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/");
        window.location.reload();
    };

    return (
        <h1 style={{ color: "red" }}>
            FALL BACK FOR ERROR
            <h6>ERROR INFO: {errorInfo}</h6>
            <button onClick={handleNavigate}>GO TO HOME</button>
        </h1>
    );
};

export default FallBack;
