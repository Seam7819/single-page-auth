import { Link } from "react-router-dom";

const Comment = ({comment}) => {

    const {id,name,email} =comment;

    return (
        <div className="bg-lime-100 p-5 border rounded-lg flex flex-col flex-grow">
            <h1 className="text-4xl">{id}</h1>
            <h1 className="text-2xl">{name}</h1>
            <p>{email}</p>
            <Link to={`/comments/${id}`} >Show Details</Link>
        </div>
    );
};

export default Comment;