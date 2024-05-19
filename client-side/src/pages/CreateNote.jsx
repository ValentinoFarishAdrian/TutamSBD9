import React, { useState } from "react";
import { createNote } from "../actions/note.actions";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const CreateNote = () => {
    const [formData, setFormData] = useState({
        user_id: "",
        title: "",
        content: "",
    });
    const [message, setMessage] = useState("");
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await createNote(formData);
        if (result.success) {
            setMessage("Create note successful!");
            navigate("/home")
        } else {
            console.log(`${result.success}`);
            setMessage("Can't Create Note. Please try again.");
        }
    };

    return (
        <div>
            <NavBar />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900 text-yellow-400">
                <div className="max-h-xl max-w-xl w-full bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl text-yellow-400 font-bold text-center mb-8">
                        Create Your Note
                    </h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="user_id" className="block text-gray-300">
                                User ID
                            </label>
                            <input
                                type="text"
                                id="user_id"
                                name="user_id"
                                className="block w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-gray-300 focus:outline-none focus:border-blue-500"
                                value={formData.user_id}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="title" className="block text-gray-300">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="block w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-gray-300 focus:outline-none focus:border-blue-500"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="content" className="block text-gray-300">
                                Content
                            </label>
                            <textarea
                                id="content"
                                name="content"
                                className="block w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-gray-300 focus:outline-none focus:border-blue-500"
                                value={formData.content}
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-2 px-4 rounded"
                        >
                            Create
                        </button>
                    </form>
                    {message && (
                        <div className="mt-4 text-gray-300 text-center">
                            <p>{message}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CreateNote