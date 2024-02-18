import {Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Lottery from "../pages/Lottery";
import Layout from "../pages/Layout";
import Bazzi from "../pages/Bazzi";
import Jhandimunda from "../pages/Jhandimunda";



const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="profile" element={<Profile />} />
                <Route path="lottery" element={<Lottery />} />
                <Route path="bazzi" element={<Bazzi />} />
                <Route path="jhandimunda" element={<Jhandimunda />} />
            </Route>
        </>
    )
)

export default router;