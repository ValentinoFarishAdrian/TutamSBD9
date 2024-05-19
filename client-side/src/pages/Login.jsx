import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../actions/account.actions';

const Login = () => {
    const [formData, setFormData] = useState({
        username:"",
        password:""
    });
    const[message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        const { name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(formData);
        if (result.success) {
            setMessage("Login successful!");
            navigate("/home")
        } else {
            console.log(`${result.success}`);
            setMessage("Login failed. Please try again.");
        }
    };

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900">
                <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl text-yellow-400 font-bold text-center mb-8">
                        Welcome to Note(Alone)
                    </h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" className="block text-gray-300">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="block w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-gray-300 focus:outline-none focus:border-blue-500"
                                value={formData.username}
                                onChange={handleLogin}
                                placeholder="Username"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-gray-300">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="block w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-gray-300 focus:outline-none focus:border-blue-500"
                                value={formData.password}
                                onChange={handleLogin}
                                placeholder="Password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded"
                        >
                            Login
                        </button>
                    </form>
                    {message && (
                        <div className="mt-4 text-gray-300 text-center">
                            <p>{message}</p>
                        </div>
                    )}
                    <div className="mt-4 text-gray-300 text-center">
                        <p>
                            Don't have an account?{" "}
                            <a href="/signup" className="text-yellow-400 hover:underline">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
