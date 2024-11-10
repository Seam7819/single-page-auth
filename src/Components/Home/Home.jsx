import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SimpleForm from "../SimpleForm/SimpleForm";
import StatefulForm from "../StatefulForm/StatefulForm";
import RefForm from "../RefForm/RefForm";
import CustomForm from "../CustomHook/CustomForm";
import CustomForm2 from "../CustomHook/CustomForm2";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <h1>Simple Form</h1>
            <SimpleForm></SimpleForm>
            <h1>StateFul</h1>
            <StatefulForm></StatefulForm>
            <h1>Ref Form</h1>
            <RefForm></RefForm>
            <h1>Custom Form</h1>
            <CustomForm></CustomForm>
            <h1>Custom Form 2</h1>
            <CustomForm2></CustomForm2>
        </div>
    );
};

export default Home;