import useInputState from "./useInputState";

const CustomForm = () => {


    const [name,setName] = useInputState('rojoni@sojoni.go')
    const [email,setEmail] = useInputState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(name);
        console.log(email);
    }

    return (
        <div>
            <form className="bg-gray-400 border p-5 rounded-lg" onSubmit={handleSubmit}>
                <input value={name} onChange={setName} type="email" name="email" id="" />
                <br />
                <br />
                <input value={email} onChange={setEmail} type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default CustomForm;