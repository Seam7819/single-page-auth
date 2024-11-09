import { useLoaderData } from "react-router-dom";

const CommentDetails = () => {
    
    const details = useLoaderData()

    return (
        <div> 
            
            <p className="text-3xl text-center bg-slate-300 p-4">
                comment no : {details.id} <br />
                comment details
                {details.body}
            </p>
        </div>
    );
};

export default CommentDetails;