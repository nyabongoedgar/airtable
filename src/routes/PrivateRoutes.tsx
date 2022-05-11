import React, { FunctionComponent } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import User from "../components/user/User";

type PrivateRoutesProps = {
    isAuthenticated: boolean
}

const PrivateRoutes: FunctionComponent<PrivateRoutesProps> = ({ isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <Routes>
            <Route path="/" element={<User />}></Route>
        </Routes>
    );
}

export default PrivateRoutes;
