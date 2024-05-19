import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../actions/account.actions';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const[message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSignUp = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signUp(formData);
        if (result.success) {
            setMessage("Sign Up successful!");
            navigate("/login")
        } else {
            console.log(`${result.success}`);
            setMessage("Sign Up failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900">
            <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg">
                <h2 className="text-3xl text-yellow-400 font-bold text-center mb-8">
                    Sign Up for Note(Alone)
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-300">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            className="bg-gray-700 text-yellow-400 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-yellow-400 w-full"
                            value={formData.username}
                            onChange={handleSignUp}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="bg-gray-700 text-yellow-400 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-yellow-400 w-full"
                            value={formData.email}
                            onChange={handleSignUp}
                        />
                    </div>
                    <div className="mb-8">
                        <label htmlFor="password" className="block text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="bg-gray-700 text-yellow-400 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-yellow-400 block w-full"
                            value={formData.password}
                            onChange={handleSignUp}
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded">
                        Sign Up
                    </button>
                </form>
                {message && (
                    <div className="mt-4 text-gray-300 text-center">
                        <p>{message}</p>
                    </div>
                )}
                <div className="mt-4 text-gray-300 text-center">
                    <p>
                        Already have an account?{" "}
                        <a href="/login" className="text-yellow-400 hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
