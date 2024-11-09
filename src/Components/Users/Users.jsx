import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData();
    console.log(users);

    return (
        <div>
            <div className="my-10">
            <h1 className="text-center">Our User is coming</h1>
            <h1 className="text-center ">Number Of user : {users.length}</h1>
            </div>
            <div className="grid grid-cols-3 gap-5 m-10">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;