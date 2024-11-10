import React from 'react';
import useValueState from './useValuState';

const CustomForm2 = () => {

    const [email,setEmail] = useValueState('rojoni@sojoni.go')
    const [pass,setpass] = useValueState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(email,pass);
    }

    return (
        <div>
            <form className="bg-gray-400 border p-5 rounded-lg" onSubmit={handleSubmit}>
                <input value={email} onChange={setEmail} type="email" name="email" id="" />
                <br />
                <br />
                <input value={pass} onChange={setpass} type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default CustomForm2;