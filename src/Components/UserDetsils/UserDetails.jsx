import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData()
    const {website,name} = user

    return (
        <div>
            <h1 className="text-3xl text-center">{name}</h1>
            <p className="text-2xl text-center">{website}</p>
        </div>
    );
};

export default UserDetails;