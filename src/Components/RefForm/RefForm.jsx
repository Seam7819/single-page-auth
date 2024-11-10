import { useRef } from "react";

const RefForm = () => {

    const handleSubmit = e => {
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
    }

    const emailRef = useRef(null)
    const nameRef = useRef(null)

    return (
        <div>
            <form className="bg-gray-400 border p-5 rounded-lg" onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" id="" />
                <br />
                <br />
                <input ref={nameRef} type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;