import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../components/login/Login";
import { useAppSelector } from "../hooks/redux";

export default function RouteContainer() {
    const { isAuthenticated } = useAppSelector(state => state.auth);
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route
                path="/"
                element={<PrivateRoutes isAuthenticated={isAuthenticated} />}
            />
        </Routes>
    );
}
