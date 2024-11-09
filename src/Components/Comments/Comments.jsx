import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

const Comments = () => {

    const comments = useLoaderData()

    // const {id,name,email} = comments

    return (
        <div>
            <h1>Number Of Comment: {comments.length}</h1>
            <div className="grid grid-cols-3 gap-5 m-10">
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
            </div>
        </div>
    );
};

export default Comments;