import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../Header/Header";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Home></Home>
        </div>
    );
};

export default Main;

