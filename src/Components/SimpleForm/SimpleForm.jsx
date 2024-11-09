
const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;
        console.log(email,pass);
    }

    return (
        <div>
            <form className="bg-gray-400 border p-5 rounded-lg" onSubmit={handleSubmit}>
                <input type="email" name="email" id="" />
                <br />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;