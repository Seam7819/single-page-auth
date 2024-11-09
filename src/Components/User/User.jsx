import { Link } from "react-router-dom";

const User = ({user}) => {

    const {id,name,email,username} = user;

    return (
        <div>
            <div className="border 5px solid bg-yellow-400 p-3 rounded-lg ">
                <h1>{name}</h1>
                <p>{email}</p>
                <p className="my-2">{username}</p>
                <Link className="border border-x-4 border-y-4 p-1 rounded-xl   border-amber-500" to={`/user/${id}`} >Show Details</Link>
            </div>
        </div>
    );
};

export default User;