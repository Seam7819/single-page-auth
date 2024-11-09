import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SimpleForm from "../SimpleForm/SimpleForm";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <SimpleForm></SimpleForm>
        </div>
    );
};

export default Home;