import { Link, useNavigate } from "react-router-dom";

const Comment = ({comment}) => {

    const navigate = useNavigate()
    const handleDetails = () =>{
        navigate(`/comments/${id}`)
    }

    const {id,name,email} =comment;

    return (
        <div className="bg-lime-100 p-5 border rounded-lg flex flex-col flex-grow">
            <h1 className="text-4xl">{id}</h1>
            <h1 className="text-2xl">{name}</h1>
            <p>{email}</p>
            <Link to={`/comments/${id}`} >Show Details</Link>
            <button onClick={handleDetails}>Details</button>
        </div>
    );
};

export default Comment;