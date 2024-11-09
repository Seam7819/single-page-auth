import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData()
    const {website,name} = user

    return (
        <div>
            <h1 className="text-3xl text-center">User Details :{name}</h1>
            <p className="text-2xl text-center">Website:{website}</p>
        </div>
    );
};

export default UserDetails;