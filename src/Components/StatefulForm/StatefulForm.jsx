import { useState } from "react";

const StatefulForm = () => {


    const [email,setEmail] = useState(null);
    const [pass, setPass] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(email, pass);
    }

    const handleEmail = e =>{
        setEmail(e.target.value)
    }

    const handlePass = e => {
        setPass(e.target.value)
    }

    return (
        <div>
            <form className="bg-gray-400 border p-5 rounded-lg" onSubmit={handleSubmit}>
                <input type="email"
                onChange={handleEmail}
                name="email" id="" />
                <br />
                <br />
                <input 
                onSubmit={handlePass}
                type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default StatefulForm;